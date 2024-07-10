import { CategoryRepository } from '@/repositories/typeorm/category.repository';
import { CreateCategoryUseCase } from '@/use-cases/category/create-category';

export function makeCreateCategoryUseCase() {
    const categoryRepository = new CategoryRepository();
    return new CreateCategoryUseCase(categoryRepository);
}
