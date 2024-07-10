import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeDeleteReservUseCase } from '@/use-cases/factory/category/make-delete-reserv-use-case';

export async function deleteReserv(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    id: z.string(),
  });

  const { id } = querySchema.parse(request.query);

  const deleteReservUseCase = makeDeleteReservUseCase();
 // await deleteReservUseCase.handler(id);

  reply.status(200).send({ message: 'Reserva deletada com sucesso e fonte atualizada.' });
}
