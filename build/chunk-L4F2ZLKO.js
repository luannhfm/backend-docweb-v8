// src/use-cases/history/get-all-hist.ts
var GetFontesUseCase = class {
  constructor(histRepository) {
    this.histRepository = histRepository;
  }
  async handler(search) {
    return this.histRepository.findFontes(search);
  }
};

export {
  GetFontesUseCase
};
