import { FastifyRequest, FastifyReply } from 'fastify';
import { makeDeleteAllSourcesUseCase } from '@/use-cases/factory/source/make-delete-all-sources-use-case';

export async function deleteAllSources(request: FastifyRequest, reply: FastifyReply) {
  const deleteAllSourcesUseCase = makeDeleteAllSourcesUseCase();
  
  try {
    await deleteAllSourcesUseCase.execute();
    reply.code(200).send({ message: 'All sources deleted successfully.' });
  } catch (error) {
    console.error('Error deleting all sources:', error);
    reply.code(500).send({ message: 'Internal Server Error' });
  }
}
