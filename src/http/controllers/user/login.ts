import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeLoginUseCase } from '@/use-cases/factory/user/make-login-use-case';

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const loginBodySchema = z.object({
    login: z.string(),
    password: z.string(),
  });

  const { login, password } = loginBodySchema.parse(request.body);

  const loginUseCase = makeLoginUseCase();
  try {
    const result = await loginUseCase.handler(login, password);
    reply.status(201).send(result);
  } catch (error: any) {
    reply.status(401).send({ message: error.message });
  }
}   
