import {
  makeCreateCategoryUseCase
} from "./chunk-RBKC3KJW.js";

// src/http/controllers/category/create.ts
import { z } from "zod";
async function createCategory(request, reply) {
  const registerBodySchema = z.object({
    category: z.string(),
    content: z.string()
  });
  const { category, content } = registerBodySchema.parse(request.body);
  const createCategoryUseCase = makeCreateCategoryUseCase();
  await createCategoryUseCase.handler({ category, content });
  reply.code(201).send({ message: "Categoria criada com sucesso." });
}

export {
  createCategory
};
