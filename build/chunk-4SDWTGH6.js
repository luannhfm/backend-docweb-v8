import {
  makeGetAllCategoriesUseCase
} from "./chunk-KNH3XOKY.js";

// src/http/controllers/category/getAll.ts
async function getAllCategories(request, reply) {
  const getAllCategoriesUseCase = makeGetAllCategoriesUseCase();
  const categories = await getAllCategoriesUseCase.handler();
  reply.send({ items: categories });
}

export {
  getAllCategories
};
