import { FastifyRequest, FastifyReply } from 'fastify';
import { makeGetAllUsersUseCase } from '@/use-cases/factory/user/make-get-all-users-use-case';

export async function getAllUsers(request: FastifyRequest, reply: FastifyReply) {
  const getAllUsersUseCase = makeGetAllUsersUseCase();
  try {
    const users = await getAllUsersUseCase.handler();
    reply.send({ items: users });
  } catch (error) {
    reply.status(500).send({ message: 'Erro ao buscar usuários.', error });
  }
}
