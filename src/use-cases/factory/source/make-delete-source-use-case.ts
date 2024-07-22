// src/use-cases/factory/source/make-delete-source-use-case.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { DeleteSourceUseCase } from '@/use-cases/source/delete-source';

export function makeDeleteSourceUseCase() {
  const sourceRepository = new SourceRepository();
  return new DeleteSourceUseCase(sourceRepository);
}
