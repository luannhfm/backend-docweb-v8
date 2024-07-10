import { FastifyInstance } from 'fastify';
import { getHistByFonte } from './getHistBySource';
import { getFontes } from './getAll';

export async function histRoutes(app: FastifyInstance) {
  app.get('/hist/:prw', getHistByFonte);
  app.get('/hist', getFontes);
}
