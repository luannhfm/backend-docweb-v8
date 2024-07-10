import { FastifyRequest, FastifyReply } from 'fastify';
import { makeUpdateCategoryUseCase } from '@/use-cases/factory/category/make-update-category-use-case';
import { z } from 'zod';

export async function updateCategory(request: FastifyRequest, reply: FastifyReply) {
    const paramsSchema = z.object({
        id: z.string(),
    });

    const bodySchema = z.object({
        content: z.string().optional(),
    });

    const { id } = paramsSchema.parse(request.params);
    const { content } = bodySchema.parse(request.body);

    const updateCategoryUseCase = makeUpdateCategoryUseCase();
    await updateCategoryUseCase.handler(id, { content });

    reply.send({ message: 'Categoria atualizada com sucesso.' });
}
