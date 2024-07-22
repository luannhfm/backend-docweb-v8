import {
  GetFontesUseCase
} from "./chunk-L4F2ZLKO.js";
import {
  HistRepository
} from "./chunk-SPQNQVZR.js";

// src/use-cases/factory/history/make-get-all-hist-case.ts
function makeGetFontesUseCase() {
  const histRepository = new HistRepository();
  return new GetFontesUseCase(histRepository);
}

export {
  makeGetFontesUseCase
};
