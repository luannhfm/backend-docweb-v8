import { ReservRepository } from '@/repositories/typeorm/reserv.repository';

export class GetReservByPrwAndIdUseCase {
  constructor(private reservRepository: ReservRepository) {}

  async handler(prw: string) {
    return this.reservRepository.findByPrw(prw);
  }
}
