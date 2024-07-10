import { CategoryRepository } from '@/repositories/typeorm/category.repository';
import { GetAllCategoriesUseCase } from '@/use-cases/category/get-all-categories';

export function makeGetAllCategoriesUseCase() {
    const categoryRepository = new CategoryRepository();
    return new GetAllCategoriesUseCase(categoryRepository);
}
