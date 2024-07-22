import {
  ValidUploadUseCase
} from "./chunk-45B6JT72.js";
import {
  ReservRepository
} from "./chunk-BR7R3Q46.js";

// src/use-cases/factory/reserv/make-valid-upload-reserv-use-case.ts
function makeValidUploadUseCase() {
  const reservRepository = new ReservRepository();
  return new ValidUploadUseCase(reservRepository);
}

export {
  makeValidUploadUseCase
};
