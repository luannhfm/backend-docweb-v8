import { UserRepository } from '@/repositories/typeorm/user.repository';
import { User } from '@/entities/user.entity';
import * as bcrypt from 'bcryptjs';

interface UserUpdateInput extends Partial<User> {
  secretkey?: string;
}

export class UpdateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async handler(id: string, updates: UserUpdateInput) {
    if (updates.secretkey) {
      updates.senha = await bcrypt.hash(updates.secretkey, 10);
      delete updates.secretkey;
    }
    const updatedUser = await this.userRepository.updateUser(id, updates);
    if (!updatedUser) {
      throw new Error('Usuário não encontrado');
    }
    return updatedUser;
  }
}
