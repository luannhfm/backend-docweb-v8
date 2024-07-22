import {
  UpdateCategoryUseCase
} from "./chunk-IVNBCH2L.js";
import {
  CategoryRepository
} from "./chunk-YS6BLQ3L.js";

// src/use-cases/factory/category/make-update-category-use-case.ts
function makeUpdateCategoryUseCase() {
  const categoryRepository = new CategoryRepository();
  return new UpdateCategoryUseCase(categoryRepository);
}

export {
  makeUpdateCategoryUseCase
};
