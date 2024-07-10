import { Category } from '@/entities/category.entity';
import { CategoryRepository } from '@/repositories/typeorm/category.repository';

export class UpdateCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    async handler(id: string, updates: Partial<Category>): Promise<void> {
        const category = await this.categoryRepository.findById(id);
        if (!category) {
            throw new Error('Categoria não encontrada.');
        }
        await this.categoryRepository.update(id, updates);
    }
}
