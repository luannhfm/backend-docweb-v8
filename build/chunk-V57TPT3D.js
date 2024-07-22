import {
  makeGetFontesUseCase
} from "./chunk-7N2G3LBM.js";

// src/http/controllers/history/getAll.ts
import { z } from "zod";
async function getFontes(request, reply) {
  const querySchema = z.object({
    search: z.string().optional()
  });
  const { search } = querySchema.parse(request.query);
  const getFontesUseCase = makeGetFontesUseCase();
  const fontes = await getFontesUseCase.handler(search);
  reply.send({ items: fontes });
}

export {
  getFontes
};
