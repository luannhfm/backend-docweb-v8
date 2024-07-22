// src/use-cases/history/get-hist-by-source.ts
var GetHistByFonteUseCase = class {
  constructor(histRepository) {
    this.histRepository = histRepository;
  }
  async handler(fonte) {
    return this.histRepository.findByFonte(fonte);
  }
};

export {
  GetHistByFonteUseCase
};
