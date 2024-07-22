import { IUserRepository } from '@/repositories/user.repository.interface';
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error';
import * as bcrypt from 'bcryptjs';

export class LoginUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handler(login: string, password: string) {
    const user = await this.userRepository.findByLogin(login);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    const isValid = await bcrypt.compare(password, user.senha);
    if (!isValid) {
      throw new InvalidCredentialsError();
    }

    return { login, admin: user.admin };
  }
}
