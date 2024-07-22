import {
  CreateCategoryUseCase
} from "./chunk-3HWAFQXG.js";
import {
  CategoryRepository
} from "./chunk-YS6BLQ3L.js";

// src/use-cases/factory/category/make-create-category-use-case.ts
function makeCreateCategoryUseCase() {
  const categoryRepository = new CategoryRepository();
  return new CreateCategoryUseCase(categoryRepository);
}

export {
  makeCreateCategoryUseCase
};
