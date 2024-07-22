import {
  makeValidUploadUseCase
} from "./chunk-K7TEL4WJ.js";

// src/http/controllers/reserve/validUpload.ts
import { z } from "zod";
async function validUpload(request, reply) {
  const querySchema = z.object({
    dev: z.string()
  });
  const { dev } = querySchema.parse(request.query);
  const validUploadUseCase = makeValidUploadUseCase();
  const fontes = await validUploadUseCase.handler(dev);
  reply.status(200).send(fontes);
}

export {
  validUpload
};
