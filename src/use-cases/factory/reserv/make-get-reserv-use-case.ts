import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
import { GetReservUseCase } from '@/use-cases/reserv/get-reserv';

export function makeGetReservUseCase() {
  const reservRepository = new ReservRepository();
  return new GetReservUseCase(reservRepository);
}
