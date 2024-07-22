import {
  makeGetHistByFonteUseCase
} from "./chunk-WQKSNP3S.js";

// src/http/controllers/history/getHistBySource.ts
import { z } from "zod";
async function getHistByFonte(request, reply) {
  const paramsSchema = z.object({
    prw: z.string()
  });
  const { prw } = paramsSchema.parse(request.params);
  const getHistByFonteUseCase = makeGetHistByFonteUseCase();
  const hist = await getHistByFonteUseCase.handler(prw);
  reply.send({ items: hist });
}

export {
  getHistByFonte
};
