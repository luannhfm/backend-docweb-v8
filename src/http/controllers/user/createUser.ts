import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeCreateUserUseCase } from '@/use-cases/factory/user/make-create-user-use-case';
import { User } from '@/entities/user.entity';

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const createUserBodySchema = z.object({
    id: z.string(),
    nome: z.string(),
    email: z.string(),
    secretkey: z.string(),
    group: z.string(),
    admin: z.boolean(),
  });

  const { id, nome, email, secretkey, group, admin } = createUserBodySchema.parse(request.body);

  const createUserUseCase = makeCreateUserUseCase();
  try {
    const newUser = await createUserUseCase.handler({
      id,
      nome,
      email,
      senha: secretkey,
      group,
      admin,
    });
    reply.status(201).send({ message: 'Usuário criado com sucesso.', user: newUser });
  } catch (error) {
    reply.status(500).send({ message: 'Erro ao criar usuário.', error });
  }
}
