import { CategoryRepository } from '@/repositories/typeorm/category.repository';

export class DeleteCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    async handler(id: string): Promise<void> {
        const category = await this.categoryRepository.findById(id);
        if (!category) {
            throw new Error('Categoria não encontrada.');
        }
        await this.categoryRepository.delete(id);
    }
}
