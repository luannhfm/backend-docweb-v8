import {
  UpdateUserUseCase
} from "./chunk-M5PCXK7L.js";
import {
  UserRepository
} from "./chunk-LI3E3PT4.js";

// src/use-cases/factory/user/make-update-user-use-case.ts
function makeUpdateUserUseCase() {
  const userRepository = new UserRepository();
  return new UpdateUserUseCase(userRepository);
}

export {
  makeUpdateUserUseCase
};
