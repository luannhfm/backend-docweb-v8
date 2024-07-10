import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeUpdateUserUseCase } from '@/use-cases/factory/user/make-update-user-use-case';

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string(),
  });

  const bodySchema = z.object({
    nome: z.string().optional(),
    email: z.string().optional(),
    secretkey: z.string().optional(),
  });

  const { id } = paramsSchema.parse(request.params);
  const updates = bodySchema.parse(request.body);

  const updateUserUseCase = makeUpdateUserUseCase();
  try {
    const updatedUser = await updateUserUseCase.handler(id, updates);
    if (!updatedUser) {
      return reply.status(404).send({ message: 'Usuário não encontrado.' });
    }
    reply.send({ message: 'Usuário atualizado com sucesso.', user: updatedUser });
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    reply.status(500).send({ message: 'Erro ao atualizar usuário.', error });
  }
}
