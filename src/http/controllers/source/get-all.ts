// src/http/controllers/source/get-all.ts
import { FastifyRequest, FastifyReply } from 'fastify';
import { makeGetAllSourcesUseCase } from '@/use-cases/factory/source/make-get-all-sources-use-case';

export async function getAllSources(request: FastifyRequest, reply: FastifyReply) {
  const getAllSourcesUseCase = makeGetAllSourcesUseCase();
  const sources = await getAllSourcesUseCase.handler();

  reply.send({ items: sources });
}
