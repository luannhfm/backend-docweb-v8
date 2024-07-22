import {
  makeLoginUseCase
} from "./chunk-UYTIEOX2.js";

// src/http/controllers/user/login.ts
import { z } from "zod";
async function login(request, reply) {
  const loginBodySchema = z.object({
    login: z.string(),
    password: z.string()
  });
  const { login: login2, password } = loginBodySchema.parse(request.body);
  const loginUseCase = makeLoginUseCase();
  try {
    const result = await loginUseCase.handler(login2, password);
    reply.status(201).send(result);
  } catch (error) {
    reply.status(401).send({ message: error.message });
  }
}

export {
  login
};
