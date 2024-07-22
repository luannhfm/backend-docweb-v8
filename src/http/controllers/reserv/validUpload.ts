import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeValidUploadUseCase } from '@/use-cases/factory/reserv/make-valid-upload-use-case';

export async function validUpload(request: FastifyRequest, reply: FastifyReply) {
  const querySchema = z.object({
    dev: z.string()
  });

  const { dev } = querySchema.parse(request.query);

  const validUploadUseCase = makeValidUploadUseCase();
  const fontes = await validUploadUseCase.handler(dev);

  reply.send(fontes);
}