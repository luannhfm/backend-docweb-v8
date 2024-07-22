import {
  makeGetReservByPrwAndIdUseCase
} from "./chunk-FM3XITV5.js";

// src/http/controllers/reserve/getReservByPrw.ts
import { z } from "zod";
import { parse, differenceInMinutes } from "date-fns";
async function getReservByPrwAndId(request, reply) {
  const paramsSchema = z.object({
    id: z.string(),
    prw: z.string()
  });
  const { id, prw } = paramsSchema.parse(request.params);
  const getReservByPrwAndIdUseCase = makeGetReservByPrwAndIdUseCase();
  const reservs = await getReservByPrwAndIdUseCase.handler(prw);
  const results = reservs.map((reserv) => {
    const dataIni = parse(`${reserv.data_ini} ${reserv.hora}`, "dd/MM/yyyy HH:mm", /* @__PURE__ */ new Date());
    const dataFim = reserv.data_fim ? parse(`${reserv.data_fim} ${reserv.hora_fim || "00:00"}`, "dd/MM/yyyy HH:mm", /* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date();
    const totalMinutes = differenceInMinutes(dataFim, dataIni);
    const dias = Math.floor(totalMinutes / (24 * 60));
    const horas = Math.floor(totalMinutes % (24 * 60) / 60);
    const minutos = totalMinutes % 60;
    const durationString = `${dias} dias, ${horas} horas, ${minutos} minutos`;
    return {
      ...reserv.toJSON(),
      dias: durationString
    };
  });
  reply.status(200).send(results);
}

export {
  getReservByPrwAndId
};
