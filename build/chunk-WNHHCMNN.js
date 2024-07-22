import {
  makeUpdateCategoryUseCase
} from "./chunk-HKCA5D57.js";

// src/http/controllers/category/update.ts
import { z } from "zod";
async function updateCategory(request, reply) {
  const paramsSchema = z.object({
    id: z.string()
  });
  const bodySchema = z.object({
    content: z.string().optional()
  });
  const { id } = paramsSchema.parse(request.params);
  const { content } = bodySchema.parse(request.body);
  const updateCategoryUseCase = makeUpdateCategoryUseCase();
  await updateCategoryUseCase.handler(id, { content });
  reply.send({ message: "Categoria atualizada com sucesso." });
}

export {
  updateCategory
};
