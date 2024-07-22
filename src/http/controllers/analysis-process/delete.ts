import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeDeleteAnalysisProcessUseCase } from '@/use-cases/factory/analysis-process/make-delete-analysis-process-use-case';

export async function deleteAnalysisProcess(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string(),
  });

  const { id } = paramsSchema.parse(request.params);

  const deleteAnalysisProcessUseCase = makeDeleteAnalysisProcessUseCase();
  await deleteAnalysisProcessUseCase.handler(id);

  reply.code(200).send({ message: 'Analysis process deleted successfully.' });
}
