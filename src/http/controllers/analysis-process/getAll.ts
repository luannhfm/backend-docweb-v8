import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeGetAllAnalysisProcessUseCase } from '@/use-cases/factory/analysis-process/make-get-all-analysis-process-use-case';

export async function getAllAnalysisProcess(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    page: z.string().optional(),
    pageSize: z.string().optional(),
  });

  const { page, pageSize } = querySchema.parse(request.query);
  const pageNumber = parseInt(page || '1', 10);
  const pageSizeNumber = parseInt(pageSize || '10', 10);

  if (pageNumber <= 0 || pageSizeNumber <= 0) {
    return reply.status(400).send({ error: 'Parâmetros page e pageSize devem ser maiores que zero.' });
  }

  const getAllAnalysisProcessUseCase = makeGetAllAnalysisProcessUseCase();
  try {
    const result = await getAllAnalysisProcessUseCase.handler(pageNumber, pageSizeNumber);
    reply.status(200).send(result);
  } catch (error) {
    console.error('Erro ao realizar consulta na tabela AnalysisResult:', error);
    reply.status(500).send('Erro ao realizar consulta na tabela AnalysisResult.');
  }
}
