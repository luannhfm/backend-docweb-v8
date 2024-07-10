import { Repository } from 'typeorm';
import { User } from '@/entities/user.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = appDataSource.getRepository(User);
  }

  async findByLogin(login: string): Promise<User | null> {
    return this.repository.findOne({ where: { id: login } });
  }

  async createUser(user: Partial<User>): Promise<User> {
    return this.repository.save(user);
  }

  async findAllUsers(): Promise<User[]> {
    return this.repository.find({ order: { id: 'ASC' } });
  }

  async deleteUser(id: string): Promise<void> {
    await this.repository.delete({ id });
  }

  async updateUser(id: string, updates: Partial<User>): Promise<User | null> {
    await this.repository.update({ id }, updates);
    return this.repository.findOne({ where: { id } });
  }
}
