import {
  GetAllCategoriesUseCase
} from "./chunk-X4QRWJJZ.js";
import {
  CategoryRepository
} from "./chunk-YS6BLQ3L.js";

// src/use-cases/factory/category/make-get-all-categories-use-case.ts
function makeGetAllCategoriesUseCase() {
  const categoryRepository = new CategoryRepository();
  return new GetAllCategoriesUseCase(categoryRepository);
}

export {
  makeGetAllCategoriesUseCase
};
