// src/use-cases/factory/reserv/make-create-reserv-use-case.ts
import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { CreateReservUseCase } from '@/use-cases/reserv/create-reserv';

export function makeCreateReservUseCase() {
  const reservRepository = new ReservRepository();
  return new CreateReservUseCase(reservRepository);
}
