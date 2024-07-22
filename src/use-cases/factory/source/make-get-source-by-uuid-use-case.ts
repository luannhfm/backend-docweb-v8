// src/use-cases/factory/source/make-get-source-by-uuid-use-case.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { GetSourceByUuidUseCase } from '@/use-cases/source/get-source-by-uuid';

export function makeGetSourceByUuidUseCase() {
  const sourceRepository = new SourceRepository();
  return new GetSourceByUuidUseCase(sourceRepository);
}
