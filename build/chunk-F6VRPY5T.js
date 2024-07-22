import {
  GetAllUsersUseCase
} from "./chunk-L5Q537GM.js";
import {
  UserRepository
} from "./chunk-LI3E3PT4.js";

// src/use-cases/factory/user/make-get-all-users-use-case.ts
function makeGetAllUsersUseCase() {
  const userRepository = new UserRepository();
  return new GetAllUsersUseCase(userRepository);
}

export {
  makeGetAllUsersUseCase
};
