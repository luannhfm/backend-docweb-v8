import { FastifyInstance } from 'fastify';
import multer from 'fastify-multer';
import { uploadFilesHandler } from './upload';
import { getHistHandler } from './getAll';
import { returnAnalysisHandler } from './returnAnalysis';
import { deleteAnalysisHandler } from './deleteAnalysis';
import { createAnalysisHandler } from './createAnalysis';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export async function analysisRoutes(app: FastifyInstance) {
  // Registrar o parser de conteúdo do multer
  app.register(multer.contentParser);

  app.post('/dict/upload', 
    { 
      preHandler: upload.fields([{ name: 'files1', maxCount: 10 }, { name: 'files2', maxCount: 10 }]) 
    }, 
    uploadFilesHandler as any
  );
  app.get('/dict/hist', getHistHandler);
  app.get('/dict/returnAnalysis', returnAnalysisHandler);
  app.delete('/dict', deleteAnalysisHandler);
  app.post('/dict/createAnalysis', createAnalysisHandler);


}
