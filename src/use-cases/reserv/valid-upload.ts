import { ReservRepository } from '@/repositories/typeorm/reserv.repository';

export class ValidUploadUseCase {
  constructor(private reservRepository: ReservRepository) {}

  async handler(dev: string): Promise<{ fonte: string }[]> {
    return this.reservRepository.findActiveByDev(dev);
  }
}