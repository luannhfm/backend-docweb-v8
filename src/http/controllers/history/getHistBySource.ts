import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeGetHistByFonteUseCase } from '@/use-cases/factory/history/make-get-hist-by-source-use-case';

export async function getHistByFonte(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    prw: z.string(),
  });

  const { prw } = paramsSchema.parse(request.params);

  const getHistByFonteUseCase = makeGetHistByFonteUseCase();
  const hist = await getHistByFonteUseCase.handler(prw);

  reply.send({ items: hist });
}
