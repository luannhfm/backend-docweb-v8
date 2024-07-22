import {
  getHistByFonte
} from "./chunk-FX63K75V.js";
import {
  getFontes
} from "./chunk-V57TPT3D.js";

// src/http/controllers/history/route.ts
async function histRoutes(app) {
  app.get("/hist/:prw", getHistByFonte);
  app.get("/hist", getFontes);
}

export {
  histRoutes
};
