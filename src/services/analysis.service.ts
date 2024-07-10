import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';
import { bufferToStream, getKeyColumnIndices, createCompositeKey } from '@/utils/stream.utils';

export class AnalysisService {
  constructor(private analysisRepository: AnalysisRepository) {}

  async updateAnalysisStatus(jsonAnalysis: any, analysisId: string) {
    await this.analysisRepository.updateAnalysisStatus(jsonAnalysis, analysisId);
  }

  async compareCsvFiles(file1: Express.Multer.File, file2: Express.Multer.File, fileName: string, uploadsData: any, seq: number): Promise<void> {
    const stream1 = await bufferToStream(file1.buffer);
    const stream2 = await bufferToStream(file2.buffer);

    const reader1 = readline.createInterface({ input: stream1 });
    const reader2 = readline.createInterface({ input: stream2 });

    const iterator1 = reader1[Symbol.asyncIterator]();
    const iterator2 = reader2[Symbol.asyncIterator]();

    try {
      let header1 = (await iterator1.next()).value.split(';');
      let header2 = (await iterator2.next()).value.split(';');

      let line1 = await iterator1.next();
      let line2 = await iterator2.next();
      let lineCount = 1;

      while (!line1.done && !line2.done) {
        lineCount++;
        const columns1 = line1.value.split(';');
        const columns2 = line2.value.split(';');
        const prefix = file1.originalname.substring(0, 3);
        const keyColumnIndices: any = await getKeyColumnIndices(prefix.toUpperCase());
        const compositeKey = await createCompositeKey(header1, columns1, keyColumnIndices);

        columns1.forEach((col: string, index: number) => {
          if (columns2[index] && col.trim() !== columns2[index].trim()) {
            const columnName = header1[index] || `Coluna ${index + 1}`;

            if (!jsonAnalysis[prefix.toUpperCase()]) {
              jsonAnalysis[prefix.toUpperCase()] = [];
            }

            jsonAnalysis[prefix.toUpperCase()].push({
              instalacao: uploadsData[0].name.toUpperCase(),
              tabela: file1.originalname.substring(0, 6).toUpperCase(),
              dif: `${columnName}: ${col.trim()}`,
              sequencia: seq,
              isOk: false,
              chave: `${compositeKey}`
            });

            jsonAnalysis[prefix.toUpperCase()].push({
              instalacao: uploadsData[1].name.toUpperCase(),
              tabela: file2.originalname.substring(0, 6).toUpperCase(),
              dif: `${columnName}: ${columns2[index].trim()}`,
              sequencia: seq,
              isOk: false,
              chave: `${compositeKey}`
            });

            seq++;
          }
        });

        line1 = await iterator1.next();
        line2 = await iterator2.next();
      }

      console.log('Comparação concluída');
    } catch (err) {
      console.error('Erro ao processar os arquivos:', err);
    } finally {
      reader1.close();
      reader2.close();
    }
  }
}
