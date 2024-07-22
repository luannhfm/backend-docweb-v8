import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeDeleteAnalysisUseCase } from '@/use-cases/factory/analysis/make-delete-analysis-use-case';

export async function deleteAnalysisHandler(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    id: z.string(),
  });

  const { id } = querySchema.parse(request.query);

  const deleteAnalysisUseCase = makeDeleteAnalysisUseCase();
  try {
    await deleteAnalysisUseCase.handler(id);
    reply.status(200).send({ message: 'Análise deletada com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar a análise:', error);
    reply.status(500).send('Erro ao deletar a análise.');
  }
}
