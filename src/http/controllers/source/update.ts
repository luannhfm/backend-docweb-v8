import { FastifyRequest, FastifyReply } from 'fastify';
import { makeUpdateSourceUseCase } from '@/use-cases/factory/source/make-update-source-use-case';
import { z } from 'zod';

export async function updateSource(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    prw: z.string(),
    category: z.string(),
  });

  const { prw, category } = paramsSchema.parse(request.params);

  const updateSourceUseCase = makeUpdateSourceUseCase();
  await updateSourceUseCase.handler(prw, { category });

  reply.send({ message: 'Source updated successfully.' });
}