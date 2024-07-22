// src/use-cases/factory/source/make-create-source-use-case.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { CreateSourceUseCase } from '@/use-cases/source/create-source';

export function makeCreateSourceUseCase() {
  const sourceRepository = new SourceRepository();
  return new CreateSourceUseCase(sourceRepository);
}
