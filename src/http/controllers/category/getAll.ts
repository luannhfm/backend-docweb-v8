import { FastifyRequest, FastifyReply } from 'fastify';
import { makeGetAllCategoriesUseCase } from '@/use-cases/factory/category/make-get-all-categories-use-case';

export async function getAllCategories(request: FastifyRequest, reply: FastifyReply) {
    const getAllCategoriesUseCase = makeGetAllCategoriesUseCase();
    const categories = await getAllCategoriesUseCase.handler();

    reply.send({ items: categories });
}
