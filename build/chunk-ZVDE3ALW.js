import {
  makeCreateUserUseCase
} from "./chunk-DDWEFLHW.js";

// src/http/controllers/user/createUser.ts
import { z } from "zod";
async function createUser(request, reply) {
  const createUserBodySchema = z.object({
    id: z.string(),
    nome: z.string(),
    email: z.string(),
    secretkey: z.string(),
    group: z.string(),
    admin: z.boolean()
  });
  const { id, nome, email, secretkey, group, admin } = createUserBodySchema.parse(request.body);
  const createUserUseCase = makeCreateUserUseCase();
  try {
    const newUser = await createUserUseCase.handler({
      id,
      nome,
      email,
      senha: secretkey,
      group,
      admin
    });
    reply.status(201).send({ message: "Usu\xE1rio criado com sucesso.", user: newUser });
  } catch (error) {
    reply.status(500).send({ message: "Erro ao criar usu\xE1rio.", error });
  }
}

export {
  createUser
};
