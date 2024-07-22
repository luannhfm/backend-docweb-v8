import {
  CreateUserUseCase
} from "./chunk-GWRT33OJ.js";
import {
  UserRepository
} from "./chunk-LI3E3PT4.js";

// src/use-cases/factory/user/make-create-user-use-case.ts
function makeCreateUserUseCase() {
  const userRepository = new UserRepository();
  return new CreateUserUseCase(userRepository);
}

export {
  makeCreateUserUseCase
};
