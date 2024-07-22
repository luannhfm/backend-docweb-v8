// src/http/controllers/reserv/getAll.ts
import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeGetAllReservUseCase } from '@/use-cases/factory/reserv/make-get-all-reservs-use-case';

export async function getAllReserv(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    page: z.string().optional(),
    pageSize: z.string().optional()
  });

  const { page = '1', pageSize = '10' } = querySchema.parse(request.query);

  const getAllReservUseCase = makeGetAllReservUseCase();
  const result = await getAllReservUseCase.handler(parseInt(page), parseInt(pageSize));

  reply.send(result);
}
