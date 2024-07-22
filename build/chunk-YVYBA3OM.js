// src/use-cases/category/delete-category.ts
var DeleteCategoryUseCase = class {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async handler(id) {
    const category = await this.categoryRepository.findById(id);
    if (!category) {
      throw new Error("Categoria n\xE3o encontrada.");
    }
    await this.categoryRepository.delete(id);
  }
};

export {
  DeleteCategoryUseCase
};
