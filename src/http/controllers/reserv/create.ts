// src/http/controllers/reserv/create.ts
import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeCreateReservUseCase } from '@/use-cases/factory/reserv/make-create-reserv-use-case';

export async function createReserv(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    fonte: z.string(),
    dev: z.string(),
    data_ini: z.string(),
    hora: z.string(),
    data_fim: z.string().optional(),
    hora_fim: z.string().optional(),
    source_ori: z.string(),
    source_dev: z.string().optional(),
  });

  const reservData: any = bodySchema.parse(request.body);

  const createReservUseCase = makeCreateReservUseCase();
  await createReservUseCase.handler(reservData);

  reply.code(201).send({ message: 'Reserva criada com sucesso.' });
}
