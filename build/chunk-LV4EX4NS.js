import {
  createCategory
} from "./chunk-4AD34MPC.js";
import {
  deleteCategory
} from "./chunk-DVGC2USP.js";
import {
  getAllCategories
} from "./chunk-4SDWTGH6.js";
import {
  updateCategory
} from "./chunk-WNHHCMNN.js";

// src/http/controllers/category/route.ts
async function categoryRoutes(app) {
  app.post("/category", createCategory);
  app.get("/category", getAllCategories);
  app.delete("/category/:id", deleteCategory);
  app.post("/category/:id", updateCategory);
}

export {
  categoryRoutes
};
