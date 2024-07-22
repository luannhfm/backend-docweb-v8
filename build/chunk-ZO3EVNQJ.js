import {
  makeGetReservUseCase
} from "./chunk-QNU5LGFC.js";

// src/http/controllers/reserve/getReserv.ts
import { z } from "zod";
import { parse, differenceInDays } from "date-fns";
async function getReserv(request, reply) {
  const querySchema = z.object({
    fonte: z.string(),
    page: z.coerce.number().min(1).default(1),
    pageSize: z.coerce.number().min(1).default(10)
  });
  const { fonte, page, pageSize } = querySchema.parse(request.query);
  const offset = (page - 1) * pageSize;
  const getReservUseCase = makeGetReservUseCase();
  const recentReservs = await getReservUseCase.handler(fonte, offset, pageSize);
  const results = recentReservs.map((reserv) => {
    const dataIni = parse(reserv.data_ini, "dd/MM/yyyy", /* @__PURE__ */ new Date());
    const dataFim = reserv.data_fim ? parse(reserv.data_fim, "dd/MM/yyyy", /* @__PURE__ */ new Date()) : /* @__PURE__ */ new Date();
    const dias = differenceInDays(dataFim, dataIni);
    return {
      ...reserv,
      dias
    };
  });
  const totalReservs = await getReservUseCase.countDistinctFonte();
  const hasNext = offset + results.length < totalReservs;
  reply.status(200).send({
    data: results,
    page,
    pageSize,
    hasNext,
    total: totalReservs
  });
}

export {
  getReserv
};
