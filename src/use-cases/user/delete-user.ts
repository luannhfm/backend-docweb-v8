import { UserRepository } from '@/repositories/typeorm/user.repository';

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async handler(id: string) {
    await this.userRepository.deleteUser(id);
  }
}
