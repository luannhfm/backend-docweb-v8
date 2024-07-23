// src/http/controllers/source/get-all.ts
import { FastifyRequest, FastifyReply } from 'fastify';
import { makeGetAllSourcesUseCase } from '@/use-cases/factory/source/make-get-all-sources-use-case';
import { z } from 'zod';

export async function getAllSources(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    search: z.string().optional(),
  });

  const { search } = querySchema.parse(request.query);

  const getAllSourcesUseCase = makeGetAllSourcesUseCase();
  const sources = await getAllSourcesUseCase.handler(search);

  reply.send({ items: sources });
}
