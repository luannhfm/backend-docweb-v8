import { FastifyRequest, FastifyReply } from 'fastify';
import { makeReservSourceUseCase } from '@/use-cases/factory/source/make-reserv-source-use-case';
import { z } from 'zod';

export async function reservSource(request: FastifyRequest, reply: FastifyReply) {
    console.log('API reserv');
    const paramsSchema = z.object({
        prw: z.string(),
        user: z.string()
    });

    const { prw, user } = paramsSchema.parse(request.params);

    try {
        const reservSourceUseCase = makeReservSourceUseCase();
        await reservSourceUseCase.handler({ prw, user });

        reply.status(200).send({ message: 'Registros atualizados e reservados com sucesso.' });
    } catch (error) {
        console.error('Erro ao atualizar registros:', error);
        reply.status(500).send({ message: 'Erro ao atualizar registros.' });
    }
}
