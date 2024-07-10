import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { ValidUploadUseCase } from '@/use-cases/reserv/valid-reserv';

export function makeValidUploadUseCase() {
  const reservRepository = new ReservRepository();
  return new ValidUploadUseCase(reservRepository);
}
