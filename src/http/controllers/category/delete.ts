import { FastifyRequest, FastifyReply } from 'fastify';
import { makeDeleteCategoryUseCase } from '@/use-cases/factory/category/make-delete-category-use-case';
import { z } from 'zod';

export async function deleteCategory(request: FastifyRequest, reply: FastifyReply) {
    const paramsSchema = z.object({
        id: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);

    const deleteCategoryUseCase = makeDeleteCategoryUseCase();
    await deleteCategoryUseCase.handler(id);

    reply.code(200).send({ message: 'Categoria deletada com sucesso.' });
}
