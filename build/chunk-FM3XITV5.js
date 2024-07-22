import {
  GetReservByPrwAndIdUseCase
} from "./chunk-HJB4CVH3.js";
import {
  ReservRepository
} from "./chunk-BR7R3Q46.js";

// src/use-cases/factory/reserv/make-get-reserv-by-prw-use-case.ts
function makeGetReservByPrwAndIdUseCase() {
  const reservRepository = new ReservRepository();
  return new GetReservByPrwAndIdUseCase(reservRepository);
}

export {
  makeGetReservByPrwAndIdUseCase
};
