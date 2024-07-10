import { UserRepository } from '@/repositories/typeorm/user.repository';
import { User } from '@/entities/user.entity';

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async handler(user: Partial<User>) {
    return this.userRepository.createUser(user);
  }
}
