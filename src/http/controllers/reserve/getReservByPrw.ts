import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeGetReservByPrwAndIdUseCase } from '@/use-cases/factory/reserv/make-get-reserv-by-prw-use-case';
import { parse, differenceInMinutes } from 'date-fns';

export async function getReservByPrwAndId(request: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string(),
    prw: z.string(),
  });

  const { id, prw } = paramsSchema.parse(request.params);
  const getReservByPrwAndIdUseCase = makeGetReservByPrwAndIdUseCase();
  const reservs = await getReservByPrwAndIdUseCase.handler(prw);

  const results = reservs.map(reserv => {
    const dataIni = parse(`${reserv.data_ini} ${reserv.hora}`, 'dd/MM/yyyy HH:mm', new Date());
    const dataFim = reserv.data_fim ? parse(`${reserv.data_fim} ${reserv.hora_fim || '00:00'}`, 'dd/MM/yyyy HH:mm', new Date()) : new Date();

    const totalMinutes = differenceInMinutes(dataFim, dataIni);

    const dias = Math.floor(totalMinutes / (24 * 60)); // Total de dias
    const horas = Math.floor((totalMinutes % (24 * 60)) / 60); // Horas restantes
    const minutos = totalMinutes % 60; // Minutos restantes

    const durationString = `${dias} dias, ${horas} horas, ${minutos} minutos`;

    return {
      ...reserv.toJSON(),
      dias: durationString,
    };
  });

  reply.status(200).send(results);
}
