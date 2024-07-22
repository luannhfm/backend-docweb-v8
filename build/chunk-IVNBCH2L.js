// src/use-cases/category/update-category.ts
var UpdateCategoryUseCase = class {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async handler(id, updates) {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new Error("Categoria n\xE3o encontrada.");
    }
    await this.categoryRepository.update(id, updates);
  }
};

export {
  UpdateCategoryUseCase
};
