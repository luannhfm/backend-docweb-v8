// src/use-cases/reserv/get-reserv.ts
var GetReservUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(fonte, offset, limit) {
    return this.reservRepository.findByFonte(fonte, offset, limit);
  }
  async countDistinctFonte() {
    return this.reservRepository.countDistinctFonte();
  }
};

export {
  GetReservUseCase
};
