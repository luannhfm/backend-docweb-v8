import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { makeCreateCategoryUseCase } from '@/use-cases/factory/category/make-create-category-use-case';

export async function createCategory(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        category: z.string(),
        content: z.string(),
    });

    const { category, content } = registerBodySchema.parse(request.body);

    const createCategoryUseCase = makeCreateCategoryUseCase();
    await createCategoryUseCase.handler({ category, content });

    reply.code(201).send({ message: 'Categoria criada com sucesso.' });
}
