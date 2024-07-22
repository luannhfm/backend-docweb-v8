import {
  GetReservUseCase
} from "./chunk-UFUUBD3X.js";
import {
  ReservRepository
} from "./chunk-BR7R3Q46.js";

// src/use-cases/factory/reserv/make-get-reserv-use-case.ts
function makeGetReservUseCase() {
  const reservRepository = new ReservRepository();
  return new GetReservUseCase(reservRepository);
}

export {
  makeGetReservUseCase
};
