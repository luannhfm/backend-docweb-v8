// src/use-cases/factory/source/make-get-all-sources-use-case.ts
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { GetAllSourcesUseCase } from '@/use-cases/source/get-all-sources';

export function makeGetAllSourcesUseCase() {
  const sourceRepository = new SourceRepository();
  return new GetAllSourcesUseCase(sourceRepository);
}
