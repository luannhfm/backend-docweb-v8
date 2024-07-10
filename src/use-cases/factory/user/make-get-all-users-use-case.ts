import { UserRepository } from '@/repositories/typeorm/user.repository';
import { GetAllUsersUseCase } from '@/use-cases/user/get-all-users';

export function makeGetAllUsersUseCase() {
  const userRepository = new UserRepository();
  return new GetAllUsersUseCase(userRepository);
}
