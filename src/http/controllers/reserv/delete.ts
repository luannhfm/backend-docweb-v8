import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeDeleteReservUseCase } from '@/use-cases/factory/reserv/make-delete-reserv-use-case';

export async function deleteReserv(request: FastifyRequest, reply: FastifyReply) {
    const querySchema = z.object({
        id: z.string(),
    });

    const { id } = querySchema.parse(request.query);

    const deleteReservUseCase = makeDeleteReservUseCase();
    
    try {
        await deleteReservUseCase.handler(id);
        reply.code(200).send({ message: 'Reserva deletada com sucesso e fonte atualizada.' });
    } catch (error) {
        console.error('Erro ao deletar registros:', error);
        reply.code(500).send({ message: 'Erro ao deletar registros.' });
    }
}
