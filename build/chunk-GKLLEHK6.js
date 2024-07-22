import {
  uploadFilesHandler
} from "./chunk-23KERREB.js";

// src/http/controllers/analysis/route.ts
import multer from "fastify-multer";
var storage = multer.memoryStorage();
var upload = multer({ storage });
async function analysisRoutes(app) {
  app.post(
    "/analysis/upload",
    {
      preHandler: upload.fields([{ name: "files1", maxCount: 10 }, { name: "files2", maxCount: 10 }])
    },
    uploadFilesHandler
    // Aqui estamos usando `as any` para evitar problemas de tipo
  );
}

export {
  analysisRoutes
};
