import {
  makeDeleteUserUseCase
} from "./chunk-DBL5RHGW.js";

// src/http/controllers/user/deleteUser.ts
import { z } from "zod";
async function deleteUser(request, reply) {
  const paramsSchema = z.object({
    id: z.string()
  });
  const { id } = paramsSchema.parse(request.params);
  const deleteUserUseCase = makeDeleteUserUseCase();
  try {
    await deleteUserUseCase.handler(id);
    reply.send({ message: "Usu\xE1rio deletado com sucesso." });
  } catch (error) {
    reply.status(500).send({ message: "Erro ao deletar usu\xE1rio.", error });
  }
}

export {
  deleteUser
};
