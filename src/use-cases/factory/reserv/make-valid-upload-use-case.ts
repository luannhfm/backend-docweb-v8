// src/use-cases/factory/reserv/make-valid-upload-use-case.ts
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { ValidUploadUseCase } from '@/use-cases/reserv/valid-upload';

export function makeValidUploadUseCase() {
  const reservRepository = new ReservRepository();
  return new ValidUploadUseCase(reservRepository);
}