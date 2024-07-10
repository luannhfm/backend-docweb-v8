import { Repository } from 'typeorm';
import { Reserv } from '@/entities/reserv.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class ReservRepository {
  private repository: Repository<Reserv>;

  constructor() {
    this.repository = appDataSource.getRepository(Reserv);
  }

  async findByFonte(fonte: string, offset: number, limit: number): Promise<Reserv[]> {
    return this.repository.find({
      where: { fonte },
      order: { createdAt: 'DESC' },
      skip: offset,
      take: limit,
    });
  }

  async countDistinctFonte(): Promise<number> {
    const result = await this.repository.query(`SELECT COUNT(DISTINCT fonte) as count FROM reserv`);
    return result[0].count;
  }

  async findByPrw(prw: string): Promise<Reserv[]> {
    return this.repository.find({
      where: { fonte: prw },
      order: { createdAt: 'DESC' },
    });
  }

  async findById(id: number): Promise<Reserv | null> {
    return this.repository.findOne({ where: { id } });
  }

  async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async updateFonteReservStatus(fonte: string, status: boolean): Promise<void> {
    await this.repository.query(
      `UPDATE source SET reserv = $1 WHERE name = $2`,
      [status, fonte]
    );
  }

  async findValidUpload(dev: string): Promise<Reserv[]> {
    return this.repository.find({
      where: {
        dev,
        data_fim: '',
      },
    });
  }
}
