import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeLoginUseCase } from '@/use-cases/factory/user/make-login-use-case';
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error';

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const loginBodySchema = z.object({
    login: z.string(),
    password: z.string(),
  });

  const { login, password } = loginBodySchema.parse(request.body);
  const loginUseCase = makeLoginUseCase();

  try {
    const result = await loginUseCase.handler(login, password);
    const token = await reply.jwtSign({ login });

    console.log('Token gerado:', token); // Adicione este log

    reply.status(200).send({ ...result, token });
  } catch (error: any) {
    if (error instanceof InvalidCredentialsError) {
      console.error('Credenciais inválidas:', error.message); // Adicione este log
      reply.status(401).send({ message: error.message });
    } else {
      console.error('Erro no login:', error); // Adicione este log
      reply.status(500).send({ message: 'Internal Server Error' });
    }
  }
}
