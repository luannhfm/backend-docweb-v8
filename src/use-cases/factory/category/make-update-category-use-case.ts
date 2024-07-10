import { CategoryRepository } from '@/repositories/typeorm/category.repository';
import { UpdateCategoryUseCase } from '@/use-cases/category/update-category';

export function makeUpdateCategoryUseCase() {
    const categoryRepository = new CategoryRepository();
    return new UpdateCategoryUseCase(categoryRepository);
}
