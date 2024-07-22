import { FastifyInstance } from 'fastify';
import { createAnalysisProcess } from './create';
import { getAllAnalysisProcess } from './getAll';
import { getAnalysisDetails } from './getDetails';
import { deleteAnalysisProcess } from './delete';

export async function analysisProcessRoutes(app: FastifyInstance) {
  app.post('/analysis-process', createAnalysisProcess);
  app.get('/analysis-process', getAllAnalysisProcess);
  app.get('/analysis-process/details', getAnalysisDetails);
  app.delete('/analysis-process/:id', deleteAnalysisProcess);
}
