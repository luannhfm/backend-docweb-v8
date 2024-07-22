// src/use-cases/user/update-user.ts
import * as bcrypt from "bcryptjs";
var UpdateUserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(id, updates) {
    if (updates.secretkey) {
      updates.senha = await bcrypt.hash(updates.secretkey, 10);
      delete updates.secretkey;
    }
    const updatedUser = await this.userRepository.updateUser(id, updates);
    if (!updatedUser) {
      throw new Error("Usu\xE1rio n\xE3o encontrado");
    }
    return updatedUser;
  }
};

export {
  UpdateUserUseCase
};
