import {
  deleteUser
} from "./chunk-UKPCJVRD.js";
import {
  getAllUsers
} from "./chunk-VSDRCI7S.js";
import {
  login
} from "./chunk-JHXWNMG3.js";
import {
  updateUser
} from "./chunk-3EU27M6N.js";
import {
  createUser
} from "./chunk-ZVDE3ALW.js";

// src/http/controllers/user/routes.ts
async function userRoutes(app) {
  app.post("/login", login);
  app.post("/users", createUser);
  app.get("/users", getAllUsers);
  app.delete("/users/:id", deleteUser);
  app.post("/users/:id", updateUser);
}

export {
  userRoutes
};
