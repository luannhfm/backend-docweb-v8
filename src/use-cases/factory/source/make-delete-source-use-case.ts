// src/use-cases/factory/source/make-delete-source-use-case.ts
import { HistRepository } from '@/repositories/typeorm/history.repository';
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { DeleteSourceUseCase } from '@/use-cases/source/delete-source';

export function makeDeleteSourceUseCase() {
  const sourceRepository = new SourceRepository();
  const histRepository = new HistRepository();
  return new DeleteSourceUseCase(sourceRepository,histRepository);
}
