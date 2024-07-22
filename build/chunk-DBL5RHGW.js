import {
  DeleteUserUseCase
} from "./chunk-5S27BA23.js";
import {
  UserRepository
} from "./chunk-LI3E3PT4.js";

// src/use-cases/factory/user/make-delete-user-use-case.ts
function makeDeleteUserUseCase() {
  const userRepository = new UserRepository();
  return new DeleteUserUseCase(userRepository);
}

export {
  makeDeleteUserUseCase
};
