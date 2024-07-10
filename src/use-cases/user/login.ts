import { UserRepository } from '@/repositories/typeorm/user.repository';
import * as bcrypt from 'bcryptjs';

export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async handler(login: string, password: string) {
    const user = await this.userRepository.findByLogin(login);
    if (user) {
      const isValid = await bcrypt.compare(password, user.senha);
      if (isValid) {
        return { user: login, admin: user.admin };
      } else {
        throw new Error('Senha incorreta!');
      }
    } else {
      throw new Error('Usuário não encontrado!');
    }
  }
}
