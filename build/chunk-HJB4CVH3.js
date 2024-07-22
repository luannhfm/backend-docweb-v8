// src/use-cases/reserv/get-reserv-by-prw.ts
var GetReservByPrwAndIdUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(prw) {
    return this.reservRepository.findByPrw(prw);
  }
};

export {
  GetReservByPrwAndIdUseCase
};
