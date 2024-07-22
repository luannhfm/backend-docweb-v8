import {
  makeUpdateUserUseCase
} from "./chunk-B4VDNW5T.js";

// src/http/controllers/user/updateUser.ts
import { z } from "zod";
async function updateUser(request, reply) {
  const paramsSchema = z.object({
    id: z.string()
  });
  const bodySchema = z.object({
    nome: z.string().optional(),
    email: z.string().optional(),
    secretkey: z.string().optional()
  });
  const { id } = paramsSchema.parse(request.params);
  const updates = bodySchema.parse(request.body);
  const updateUserUseCase = makeUpdateUserUseCase();
  try {
    const updatedUser = await updateUserUseCase.handler(id, updates);
    if (!updatedUser) {
      return reply.status(404).send({ message: "Usu\xE1rio n\xE3o encontrado." });
    }
    reply.send({ message: "Usu\xE1rio atualizado com sucesso.", user: updatedUser });
  } catch (error) {
    console.error("Erro ao atualizar usu\xE1rio:", error);
    reply.status(500).send({ message: "Erro ao atualizar usu\xE1rio.", error });
  }
}

export {
  updateUser
};
