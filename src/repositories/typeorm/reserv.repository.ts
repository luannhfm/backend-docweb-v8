// src/repositories/typeorm/reserv.repository.ts
import { Repository, IsNull } from 'typeorm';
import { Reserv } from '@/entities/reserv.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';
import { Not } from 'typeorm';
export class ReservRepository {
  private repository: Repository<Reserv>;

  constructor() {
    this.repository = appDataSource.getRepository(Reserv);
  }

  async create(data: Partial<Reserv>): Promise<void> {
    await this.repository.save(data);
}
  async findAll(): Promise<Reserv[]> {
    return this.repository.find();
  }

  async findById(id: number): Promise<Reserv | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findByPrwAndId(prw: string, id: number): Promise<Reserv[]> {
    return this.repository.find({
        where: {
            fonte: prw
        },
        order: {
            createdAt: 'DESC',
        },
    });
}

  async findDistinctByFonte(limit: number, offset: number): Promise<Reserv[]> {
    return this.repository.createQueryBuilder('reserv')
      .distinctOn(['reserv.fonte'])
      .orderBy('reserv.fonte')
      .addOrderBy('reserv.createdAt', 'DESC')
      .limit(limit)
      .offset(offset)
      .getMany();
  }

  async countDistinctFonte(): Promise<number> {
    const result = await this.repository.createQueryBuilder('reserv')
      .select('COUNT(DISTINCT reserv.fonte)', 'count')
      .getRawOne();
    return parseInt(result.count, 10);
  }

  async update(id: number, updates: Partial<Reserv>): Promise<void> {
    await this.repository.update({ id }, updates);
  }
  async updateSource(fieldsToUpdate: Partial<Reserv>, conditions: Partial<Reserv>): Promise<void> {
    await this.repository.update(conditions, fieldsToUpdate);
}

  async deleteById(id: number): Promise<void> {
    await this.repository.delete({ id });
}

  async findActiveByDev(dev: string): Promise<Reserv[]> {
    return this.repository.find({ where: { dev, data_fim:'' }, select: ['fonte'] });
  }
}
