// src/use-cases/user/delete-user.ts
var DeleteUserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(id) {
    await this.userRepository.deleteUser(id);
  }
};

export {
  DeleteUserUseCase
};
