import {
  makeDeleteCategoryUseCase
} from "./chunk-YU2J7CZV.js";

// src/http/controllers/category/delete.ts
import { z } from "zod";
async function deleteCategory(request, reply) {
  const paramsSchema = z.object({
    id: z.string()
  });
  const { id } = paramsSchema.parse(request.params);
  const deleteCategoryUseCase = makeDeleteCategoryUseCase();
  await deleteCategoryUseCase.handler(id);
  reply.code(200).send({ message: "Categoria deletada com sucesso." });
}

export {
  deleteCategory
};
