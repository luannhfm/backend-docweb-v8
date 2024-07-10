import { UserRepository } from '@/repositories/typeorm/user.repository';
import { LoginUseCase } from '@/use-cases/user/login';

export function makeLoginUseCase() {
  const userRepository = new UserRepository();
  return new LoginUseCase(userRepository);
}
