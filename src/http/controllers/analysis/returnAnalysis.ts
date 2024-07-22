import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeReturnAnalysisUseCase } from '@/use-cases/factory/analysis/make-return-analysis-use-case';

export async function returnAnalysisHandler(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    id: z.string(),
  });

  const { id } = querySchema.parse(request.query);

  const returnAnalysisUseCase = makeReturnAnalysisUseCase();
  try {
    const analysis = await returnAnalysisUseCase.handler(id);
    reply.status(200).send(analysis);
  } catch (error) {
    console.error('Erro ao buscar a análise:', error);
    reply.status(500).send('Erro ao buscar a análise.');
  }
}
