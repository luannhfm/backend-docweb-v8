import { HistRepository } from '@/repositories/typeorm/history.repository';
import { GetFontesUseCase } from '@/use-cases/history/get-all-hist';

export function makeGetFontesUseCase() {
  const histRepository = new HistRepository();
  return new GetFontesUseCase(histRepository);
}
