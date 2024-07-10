import { ReservRepository } from '@/repositories/typeorm/reserv.repository';

export class ValidUploadUseCase {
  constructor(private reservRepository: ReservRepository) {}

  async handler(dev: string) {
    return this.reservRepository.findValidUpload(dev);
  }
}
