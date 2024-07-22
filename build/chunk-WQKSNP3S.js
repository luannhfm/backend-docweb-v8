import {
  GetHistByFonteUseCase
} from "./chunk-4G5L6A4F.js";
import {
  HistRepository
} from "./chunk-SPQNQVZR.js";

// src/use-cases/factory/history/make-get-hist-by-source-use-case.ts
function makeGetHistByFonteUseCase() {
  const histRepository = new HistRepository();
  return new GetHistByFonteUseCase(histRepository);
}

export {
  makeGetHistByFonteUseCase
};
