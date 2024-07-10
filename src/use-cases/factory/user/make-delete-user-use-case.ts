import { UserRepository } from '@/repositories/typeorm/user.repository';
import { DeleteUserUseCase } from '@/use-cases/user/delete-user';

export function makeDeleteUserUseCase() {
  const userRepository = new UserRepository();
  return new DeleteUserUseCase(userRepository);
}
