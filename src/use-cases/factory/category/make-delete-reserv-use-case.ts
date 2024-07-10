import { ReservRepository } from '@/repositories/typeorm/reserv.repository';
//import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { DeleteReservUseCase} from '@/use-cases/reserv/delete-reserv';
export function makeDeleteReservUseCase() {
  const reservRepository = new ReservRepository();
 // const sourceRepository = new SourceRepository();
  //return new DeleteReservUseCase(reservRepository /*, sourceRepository*/);
}
