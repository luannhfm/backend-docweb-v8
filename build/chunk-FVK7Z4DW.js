import {
  userRoutes
} from "./chunk-QIKKKLYR.js";
import {
  histRoutes
} from "./chunk-KQ2O5EAE.js";
import {
  analysisRoutes
} from "./chunk-GKLLEHK6.js";
import {
  categoryRoutes
} from "./chunk-LV4EX4NS.js";

// src/app.ts
import "reflect-metadata";
import fastify from "fastify";
import cors from "@fastify/cors";
var app = fastify();
app.register(cors, {
  origin: "*"
});
app.register(categoryRoutes);
app.register(histRoutes);
app.register(userRoutes);
app.register(analysisRoutes);

export {
  app
};
