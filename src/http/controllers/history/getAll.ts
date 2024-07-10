import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeGetFontesUseCase } from '@/use-cases/factory/history/make-get-all-hist-case';

export async function getFontes(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    search: z.string().optional(),
  });

  const { search } = querySchema.parse(request.query);

  const getFontesUseCase = makeGetFontesUseCase();
  const fontes = await getFontesUseCase.handler(search);

  reply.send({ items: fontes });
}
