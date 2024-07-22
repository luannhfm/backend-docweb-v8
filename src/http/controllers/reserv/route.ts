// src/http/controllers/reserv/route.ts
import { FastifyInstance } from 'fastify';
import { getAllReserv } from './get-all';
import { getReservByPrwAndId } from './get-by-id';
import { deleteReserv } from './delete';
import { validUpload } from './validUpload';

export async function reservRoutes(app: FastifyInstance) {
  app.get('/reserv', getAllReserv);
  app.get('/reserv/:id/:prw', getReservByPrwAndId);
  app.delete('/reserv', deleteReserv);
  app.get('/reserv/validUpload', validUpload);
}
