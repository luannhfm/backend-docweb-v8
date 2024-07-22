// src/use-cases/category/create-category.ts
var CreateCategoryUseCase = class {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }
  async handler({ category, content }) {
    const existingCategory = await this.categoryRepository.findById(category);
    if (existingCategory) {
      throw new Error("Categoria j\xE1 existente.");
    }
    await this.categoryRepository.create(category, content);
  }
};

export {
  CreateCategoryUseCase
};
