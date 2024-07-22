import { User } from '@/entities/user.entity';

export interface IUserRepository {
  findByLogin(login: string): Promise<User | undefined>;
}
