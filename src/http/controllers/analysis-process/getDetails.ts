import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeGetAnalysisDetailsUseCase } from '@/use-cases/factory/analysis-process/make-get-analysis-details-use-case';

export async function getAnalysisDetails(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    analysisId: z.string(),
  });

  const { analysisId } = querySchema.parse(request.query);

  const getAnalysisDetailsUseCase = makeGetAnalysisDetailsUseCase();
  const details = await getAnalysisDetailsUseCase.handler(analysisId);

  reply.send(details);
}
