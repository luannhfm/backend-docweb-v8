import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeCreateAnalysisProcessUseCase } from '@/use-cases/factory/analysis-process/make-create-analysis-process-use-case';

export async function createAnalysisProcess(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    id: z.string(),
    fontes: z.array(z.string()),
    categorys: z.array(z.string()),
    analysisId: z.string(),
  });

  const { id, fontes, categorys, analysisId } = bodySchema.parse(request.body);

  const createAnalysisProcessUseCase = makeCreateAnalysisProcessUseCase();
  await createAnalysisProcessUseCase.handler({ id, fontes, categorys, analysisId });

  reply.code(201).send({ message: 'Analysis process created successfully.' });
}
