import {
  LoginUseCase
} from "./chunk-TERBZWSV.js";
import {
  UserRepository
} from "./chunk-LI3E3PT4.js";

// src/use-cases/factory/user/make-login-use-case.ts
function makeLoginUseCase() {
  const userRepository = new UserRepository();
  return new LoginUseCase(userRepository);
}

export {
  makeLoginUseCase
};
