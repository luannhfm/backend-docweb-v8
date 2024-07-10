import { CategoryRepository } from '@/repositories/typeorm/category.repository';
import { DeleteCategoryUseCase } from '@/use-cases/category/delete-category';

export function makeDeleteCategoryUseCase() {
    const categoryRepository = new CategoryRepository();
    return new DeleteCategoryUseCase(categoryRepository);
}
