// src/use-cases/reserv/valid-reserv.ts
var ValidUploadUseCase = class {
  constructor(reservRepository) {
    this.reservRepository = reservRepository;
  }
  async handler(dev) {
    return this.reservRepository.findValidUpload(dev);
  }
};

export {
  ValidUploadUseCase
};
