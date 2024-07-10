import { Repository } from 'typeorm';
import { Hist } from '@/entities/history.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class HistRepository {
  private repository: Repository<Hist>;

  constructor() {
    this.repository = appDataSource.getRepository(Hist);
  }

  async findByFonte(fonte: string): Promise<Hist[]> {
    return this.repository.find({ where: { fonte }, order: { id: 'DESC' } });
  }

  async findFontes(search?: string): Promise<Hist[]> {
    const query = this.repository.createQueryBuilder('hist')
      .select('fonte')
      .groupBy('fonte')
      .orderBy('fonte', 'ASC');

    if (search) {
      query.where('LOWER(hist.fonte) LIKE :search', { search: `%${search.toLowerCase()}%` });
    }

    return query.getRawMany();
  }
}
