import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeDeleteUserUseCase } from '@/use-cases/factory/user/make-delete-user-use-case';

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string(),
  });

  const { id } = paramsSchema.parse(request.params);

  const deleteUserUseCase = makeDeleteUserUseCase();
  try {
    await deleteUserUseCase.handler(id);
    reply.send({ message: 'Usuário deletado com sucesso.' });
  } catch (error) {
    reply.status(500).send({ message: 'Erro ao deletar usuário.', error });
  }
}
