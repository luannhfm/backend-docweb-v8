import { FastifyReply, FastifyRequest } from 'fastify';

export async function validateJwt(request: FastifyRequest, reply: FastifyReply) {
  try {
    const routeFreeList = ['POST-/login'];
    const validateRoute = `${request.method}-${request.routerPath}`;

    if (routeFreeList.includes(validateRoute)) return;

    console.log('Token recebido no cabeçalho:', request.headers.authorization); // Adicione este log

    await request.jwtVerify();

    console.log('Token validado com sucesso'); // Adicione este log
  } catch (error) {
    console.error('Erro na validação do token:', error); // Adicione este log
    reply.status(401).send({ message: 'Unauthorized' });
  }
}
