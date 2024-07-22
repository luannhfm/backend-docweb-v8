// src/use-cases/user/get-all-users.ts
var GetAllUsersUseCase = class {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async handler() {
    return this.userRepository.findAllUsers();
  }
};

export {
  GetAllUsersUseCase
};
