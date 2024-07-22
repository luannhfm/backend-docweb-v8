import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeCreateAnalysisUseCase } from '@/use-cases/factory/analysis/make-create-analysis-use-case';

export async function createAnalysisHandler(request: FastifyRequest, reply: FastifyReply) {
  const bodySchema = z.object({
    id: z.string(),
  });

  const { id } = bodySchema.parse(request.body);
  const jsonAnalysis = {}; // Ajuste conforme necessário

  const createAnalysisUseCase = makeCreateAnalysisUseCase();
  try {
    await createAnalysisUseCase.handler(id, jsonAnalysis);
    reply.status(201).send({ message: 'Processando dicionários.' });
  } catch (error) {
    console.error('Erro ao salvar a análise:', error);
    reply.status(500).send({ message: 'Erro ao gravar andamento.' });
  }
}
