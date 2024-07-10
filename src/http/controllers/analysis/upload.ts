import { FastifyRequest, FastifyReply } from 'fastify';
import { AnalysisService } from '@/services/analysis.service';
import multer from 'fastify-multer';
import { bufferToStream, getKeyColumnIndices, createCompositeKey } from '@/utils/stream.utils';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const jsonAnalysis: any = {};
let seq = 1;

export async function upload(req: FastifyRequest, reply: FastifyReply) {
  jsonAnalysis = {};
  const analysisService = new AnalysisService(new AnalysisRepository());

  const uploadsData = req.body.uploadsData ? JSON.parse(req.body.uploadsData) : [];
  const analysisId = req.body.analysisId;

  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  if (!files || Object.keys(files).length === 0) {
    console.log('Nenhum arquivo foi enviado ou a forma dos dados não é como esperado.');
    return reply.status(400).send('Nenhum arquivo foi enviado.');
  }

  const filesByPrefixAndField: { [key: string]: { [key: string]: Express.Multer.File[] } } = {};

  Object.entries(files).forEach(([field, filesArray]) => {
    filesArray.forEach(file => {
      const prefix = file.originalname.substring(0, 3);
      if (!filesByPrefixAndField[prefix]) {
        filesByPrefixAndField[prefix] = {};
      }
      if (!filesByPrefixAndField[prefix][field]) {
        filesByPrefixAndField[prefix][field] = [];
      }
      filesByPrefixAndField[prefix][field].push(file);
    });
  });

  for (const [prefix, groupedFiles] of Object.entries(filesByPrefixAndField)) {
    const fields = Object.keys(groupedFiles);
    if (fields.length > 1 && groupedFiles[fields[0]].length && groupedFiles[fields[1]].length) {
      for (const file1 of groupedFiles[fields[0]]) {
        for (const file2 of groupedFiles[fields[1]]) {
          console.log(`Comparando ${file1.originalname} com ${file2.originalname}`);
          await analysisService.compareCsvFiles(file1, file2, prefix, uploadsData, seq);
          seq = 1;
        }
      }
    }
  }

  try {
    await analysisService.updateAnalysisStatus(jsonAnalysis, analysisId);
    return reply.send('Arquivos recebidos e processados.');
  } catch (error) {
    console.error('Erro durante a análise:', error);
    if (!reply.sent) {
      return reply.status(500).send('Erro ao processar os arquivos.');
    }
  }
}
