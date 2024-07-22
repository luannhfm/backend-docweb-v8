import * as fs from 'fs/promises';
import * as pathlib from 'path';
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { parseFile } from '@/utils/parseFile';
import { HistRepository } from '@/repositories/typeorm/history.repository'; // Adicione isso
import { ReservRepository } from '@/repositories/typeorm/reserv.repository'; // Adicione isso
import { SourceFunctionRepository } from '@/repositories/typeorm/source-function.repository'; // Adicione isso
import { SourceTableRepository } from '@/repositories/typeorm/source-table.repository'; // Adicione isso
import { SourceTableFieldRepository } from '@/repositories/typeorm/source-table-field.repository'; // Adicione isso
import * as utils from '@/utils/file.utils'
import * as chardet from 'chardet';
import * as iconv from 'iconv-lite';

export class UnzipSourceUseCase {
  constructor(
    private sourceRepository: SourceRepository,
    private histRepository: HistRepository, // Adicione isso
    private reservRepository: ReservRepository, // Adicione isso
    private sourceFunctionRepository: SourceFunctionRepository, // Adicione isso
    private sourceTableRepository: SourceTableRepository, // Adicione isso
    private sourceTableFieldRepository: SourceTableFieldRepository // Adicione isso
  ) {}

  async handler(uid: string, filePath: string, user: string, commit: string): Promise<void> {
    const unzipper = require('unzipper');

    // Lê o arquivo zip
    const readStream = await fs.readFile(filePath);

    // Abre o buffer do arquivo zip
    const entries = await unzipper.Open.buffer(readStream);
    for (const entry of entries.files) {
      const fileName = pathlib.basename(entry.path);
      const fileExt = pathlib.extname(entry.path).toLowerCase();

      // Processa apenas arquivos .prw, .prx, .tlpp
      if (['.prw', '.prx', '.tlpp'].includes(fileExt)) {
        const contentBuffer = await entry.buffer();
        const detectedEncoding = chardet.detect(contentBuffer) || 'UTF-8';
        const content = iconv.decode(contentBuffer, detectedEncoding);
        const utf8Buffer = Buffer.from(content, 'utf-8');

        console.log(utf8Buffer)
        // Cria o diretório tmp se não existir
        await fs.mkdir('tmp/', { recursive: true });

        // Salva o arquivo convertido em UTF-8
        const outfile = `tmp/${fileName}_${uid}.dat`;
        await fs.writeFile(outfile, utf8Buffer);

        try {
          // Processa o arquivo salvo
          const result: any = await parseFile(outfile);

          const existingSource = await this.sourceRepository.findByPrw(fileName);
          if (existingSource && existingSource.category !== result.category) {
            console.log(`${fileName} : ${existingSource.category} => ${result.category}`);
          }

          if (existingSource) {
            const sourceOldHist = existingSource.source;

            await this.sourceRepository.delete(fileName);

            await this.histRepository.create({
              fonte: fileName,
              user: user,
              action: 'UPDATE',
              source: result.source,
              commit: commit,
              sourceOld: sourceOldHist
            });
          } else {
            await this.histRepository.create({
              fonte: fileName,
              user: user,
              action: 'CREATE',
              source: result.source,
              commit: commit
            });
          }

          const lines = (result.source ?? '').split('\n');
          const blankLinesCount = utils.countBlankLines(result.source ?? '');
          const commentedLinesCount = utils.countCommentedLines(lines);

          // Cria o objeto Source
          const s = await this.sourceRepository.create({
           // uuid: uid,
            label: 'Documentação',
            category: result.category,
            name: fileName,
            reserv: false,
            tables: result.tables.length,
            functions: result.functions.length,
            source: result.source,
            line: lines.length ?? 0, // Conta o número total de linhas
            blankLines: blankLinesCount, // Conta o número de linhas em branco
            commentedLines: commentedLinesCount // Conta o número de linhas comentadas
          });

          const currentDate = new Date();
          const dataFim = currentDate.toLocaleDateString('pt-BR');
          const horaFim = currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

          await this.reservRepository.updateSource(
            { source_dev: result.source, data_fim: dataFim, hora_fim: horaFim }, 
            { fonte: fileName, data_fim: '' }
        );

      

          for (const f of result.functions) {
            await this.sourceFunctionRepository.create({
            //  uuid: uid,
              type: f.type,
              name: f.name,
              source: f.body.join('\n'),
              line: lines.length ?? 0, // Conta o número total de linhas
              blankLines: blankLinesCount, // Conta o número de linhas em branco
              commentedLines: commentedLinesCount, // Conta o número de linhas comentadas
              Source: s // Aqui estamos referenciando a entidade Source 
            });
          }
          
          for (const table of result.tables) {
            const t = await this.sourceTableRepository.create({
             // uuid: uid,
              name: table.name,
              source: s // Aqui estamos referenciando a entidade Source criada anteriormente
            });
          
            for (const field of table.fields) {
              await this.sourceTableFieldRepository.create({
               // uuid: uid,
                name: field,
                sourceTable: t // Aqui estamos referenciando a entidade SourceTable criada anteriormente
              });
            }
          }
                   
        } catch (error) {
          console.error(`Erro ao processar o arquivo ${fileName}:`, error);
        }
      }
    }

    console.log('Processamento finalizado');
  }
}
