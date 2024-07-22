// src/use-cases/factory/source/make-update-source-use-case.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { UpdateSourceUseCase } from '@/use-cases/source/update-source';

export function makeUpdateSourceUseCase() {
  const sourceRepository = new SourceRepository();
  return new UpdateSourceUseCase(sourceRepository);
}