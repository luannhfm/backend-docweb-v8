import {
  DeleteCategoryUseCase
} from "./chunk-YVYBA3OM.js";
import {
  CategoryRepository
} from "./chunk-YS6BLQ3L.js";

// src/use-cases/factory/category/make-delete-category-use-case.ts
function makeDeleteCategoryUseCase() {
  const categoryRepository = new CategoryRepository();
  return new DeleteCategoryUseCase(categoryRepository);
}

export {
  makeDeleteCategoryUseCase
};
