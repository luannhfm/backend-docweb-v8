import { FastifyRequest, FastifyReply } from 'fastify';
import { makeGetSourceDetailUseCase } from '@/use-cases/factory/source/make-get-source-detail-use-case';
import { z } from 'zod';

export async function getSourceDetail(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.preprocess((val) => Number(val), z.number()),
  });

  const { id } = paramsSchema.parse(request.params);

  const getSourceDetailUseCase = makeGetSourceDetailUseCase();
  const sourceDetail = await getSourceDetailUseCase.handler(id);

  reply.send({ item: sourceDetail });
}
