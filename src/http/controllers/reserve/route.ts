import { FastifyInstance } from 'fastify';
import { getReserv } from './getReserv';
import { getReservByPrwAndId } from './getReservByPrw';
import { deleteReserv } from './delete';
import { validUpload } from './validUpload';

export async function reservRoutes(app: FastifyInstance) {
  app.get('/reserv', getReserv);
  app.get('/reserv/:id/:prw', getReservByPrwAndId);
  app.delete('/reserv', deleteReserv);
  app.get('/reserv/validUpload', validUpload);
}
