// src/use-cases/category/get-all-categories.ts
var GetAllCategoriesUseCase = class {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async handler() {
    return this.categoryRepository.findAll();
  }
};

export {
  GetAllCategoriesUseCase
};
