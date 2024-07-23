import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeGetReservByPrwAndIdUseCase } from '@/use-cases/factory/reserv/make-get-reserv-by-source-use-case';

export async function getReservByPrwAndId(request: FastifyRequest, reply: FastifyReply) {


    const { id, prw } : any = request.params;

    const getReservByPrwAndIdUseCase = makeGetReservByPrwAndIdUseCase();
    const results = await getReservByPrwAndIdUseCase.handler(prw, id);

    reply.send(results);
}
