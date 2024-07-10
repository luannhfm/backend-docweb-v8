import { HistRepository } from '@/repositories/typeorm/history.repository';
import { GetHistByFonteUseCase } from '@/use-cases/history/get-hist-by-source';

export function makeGetHistByFonteUseCase() {
  const histRepository = new HistRepository();
  return new GetHistByFonteUseCase(histRepository);
}
