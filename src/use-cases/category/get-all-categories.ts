import { Category } from '@/entities/category.entity';
import { CategoryRepository } from '@/repositories/typeorm/category.repository';

export class GetAllCategoriesUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    async handler(): Promise<Category[]> {
        return this.categoryRepository.findAll();
    }
}
