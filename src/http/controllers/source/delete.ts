// src/http/controllers/source/delete.ts
import { FastifyRequest, FastifyReply } from 'fastify';
import { makeDeleteSourceUseCase } from '@/use-cases/factory/source/make-delete-source-use-case';
import { z } from 'zod';

export async function deleteSource(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    prw: z.string(),
  });

  
  const { prw } = paramsSchema.parse(request.params);
  console.log(prw)
  const deleteSourceUseCase = makeDeleteSourceUseCase();
  await deleteSourceUseCase.handler(prw);

  reply.code(200).send({ message: 'Source deleted successfully.' });
}
