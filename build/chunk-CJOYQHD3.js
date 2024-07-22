import {
  makeDeleteReservUseCase
} from "./chunk-JIXM6TIY.js";

// src/http/controllers/reserve/delete.ts
import { z } from "zod";
async function deleteReserv(request, reply) {
  const querySchema = z.object({
    id: z.string()
  });
  const { id } = querySchema.parse(request.query);
  const deleteReservUseCase = makeDeleteReservUseCase();
  reply.status(200).send({ message: "Reserva deletada com sucesso e fonte atualizada." });
}

export {
  deleteReserv
};
