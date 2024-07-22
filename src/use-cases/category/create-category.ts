import { CategoryRepository } from '@/repositories/typeorm/category.repository';

export class CreateCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    async handler({ category, content }: { category: string; content: string }): Promise<void> {
        const existingCategory = await this.categoryRepository.findById(category);
        if (existingCategory) {
           
        }
        await this.categoryRepository.create(category, content);
    }
}
