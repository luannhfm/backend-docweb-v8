import * as fs from 'fs/promises';
import * as pathlib from 'path';
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { parseFile } from '@/utils/parseFile';
import { HistRepository } from '@/repositories/typeorm/history.repository';
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { SourceFunctionRepository } from '@/repositories/typeorm/source-function.repository';
import { SourceTableRepository } from '@/repositories/typeorm/source-table.repository';
import { SourceTableFieldRepository } from '@/repositories/typeorm/source-table-field.repository';
import * as utils from '@/utils/file.utils';
import * as chardet from 'chardet';
import * as iconv from 'iconv-lite';

export class UnzipSourceUseCase {
  constructor(
    private sourceRepository: SourceRepository,
    private histRepository: HistRepository,
    private reservRepository: ReservRepository,
    private sourceFunctionRepository: SourceFunctionRepository,
    private sourceTableRepository: SourceTableRepository,
    private sourceTableFieldRepository: SourceTableFieldRepository
  ) {}

  async handler(uid: string, filePath: string, user: string, commit: string): Promise<void> {
    const unzipper = require('unzipper');
    const readStream = await fs.readFile(filePath);
    const entries = await unzipper.Open.buffer(readStream);

    await fs.mkdir('tmp/', { recursive: true });

    const processEntry = async (entry: any) => {
      const fileName = pathlib.basename(entry.path);
      const fileExt = pathlib.extname(entry.path).toLowerCase();

      if (!['.prw', '.prx', '.tlpp'].includes(fileExt)) return;

      const contentBuffer = await entry.buffer();
      const detectedEncoding = chardet.detect(contentBuffer) || 'UTF-8';
      const content = iconv.decode(contentBuffer, detectedEncoding);
      const utf8Buffer = Buffer.from(content, 'utf-8');
      const outfile = `tmp/${fileName}_${uid}.dat`;

      await fs.writeFile(outfile, utf8Buffer);

      try {
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

        const s = await this.sourceRepository.create({
          label: 'Documentação',
          category: result.category,
          name: fileName,
          reserv: false,
          tables: result.tables.length,
          functions: result.functions.length,
          source: result.source,
          line: lines.length ?? 0,
          blankLines: blankLinesCount,
          commentedLines: commentedLinesCount
        });

        const currentDate = new Date();
        const dataFim = currentDate.toLocaleDateString('pt-BR');
        const horaFim = currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

        await this.reservRepository.updateSource(
          { source_dev: result.source, data_fim: dataFim, hora_fim: horaFim },
          { fonte: fileName, data_fim: '' }
        );

        await Promise.all(result.functions.map(async (f: any) => {
          await this.sourceFunctionRepository.create({
            type: f.type,
            name: f.name,
            source: f.body.join('\n'),
            line: lines.length ?? 0,
            blankLines: blankLinesCount,
            commentedLines: commentedLinesCount,
            Source: s
          });
        }));

        await Promise.all(result.tables.map(async (table: any) => {
          const t = await this.sourceTableRepository.create({
            name: table.name,
            source: s
          });

          await Promise.all(table.fields.map(async (field: any) => {
            await this.sourceTableFieldRepository.create({
              name: field,
              sourceTable: t
            });
          }));
        }));

      } catch (error) {
        console.error(`Erro ao processar o arquivo ${fileName}:`, error);
      }
    };

    await Promise.all(entries.files.map(processEntry));

    console.log('Processamento finalizado');
  }
}
