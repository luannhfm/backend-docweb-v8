import { UserRepository } from '@/repositories/typeorm/user.repository';

export class GetAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async handler() {
    return this.userRepository.findAllUsers();
  }
}
