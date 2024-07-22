// src/use-cases/user/login.ts
import * as bcrypt from "bcryptjs";
var LoginUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(login, password) {
    const user = await this.userRepository.findByLogin(login);
    if (user) {
      const isValid = await bcrypt.compare(password, user.senha);
      if (isValid) {
        return { user: login, admin: user.admin };
      } else {
        throw new Error("Senha incorreta!");
      }
    } else {
      throw new Error("Usu\xE1rio n\xE3o encontrado!");
    }
  }
};

export {
  LoginUseCase
};
