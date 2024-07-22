// src/use-cases/user/create-user.ts
var CreateUserUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler(user) {
    return this.userRepository.createUser(user);
  }
};

export {
  CreateUserUseCase
};
