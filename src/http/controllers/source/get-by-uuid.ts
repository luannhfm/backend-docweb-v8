// src/http/controllers/source/get-by-uuid.ts
import { FastifyRequest, FastifyReply } from 'fastify';
import { makeGetSourceByUuidUseCase } from '@/use-cases/factory/source/make-get-source-by-uuid-use-case';
import { z } from 'zod';

export async function getSourceByUuid(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    uuid: z.string(),
  });

  const { uuid } = paramsSchema.parse(request.params);

  const getSourceByUuidUseCase = makeGetSourceByUuidUseCase();
  const sources = await getSourceByUuidUseCase.handler(uuid);

  reply.send({ items: sources });
}
