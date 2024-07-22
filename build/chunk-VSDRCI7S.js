import {
  makeGetAllUsersUseCase
} from "./chunk-F6VRPY5T.js";

// src/http/controllers/user/getAllUsers.ts
async function getAllUsers(request, reply) {
  const getAllUsersUseCase = makeGetAllUsersUseCase();
  try {
    const users = await getAllUsersUseCase.handler();
    reply.send({ items: users });
  } catch (error) {
    reply.status(500).send({ message: "Erro ao buscar usu\xE1rios.", error });
  }
}

export {
  getAllUsers
};
