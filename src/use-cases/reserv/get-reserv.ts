import { ReservRepository } from '@/repositories/typeorm/reserv.repository';

export class GetReservUseCase {
  constructor(private reservRepository: ReservRepository) {}

  async handler(fonte: string, offset: number, limit: number) {
    return this.reservRepository.findByFonte(fonte, offset, limit);
  }


  async countDistinctFonte() {
    return this.reservRepository.countDistinctFonte();
  }
}
