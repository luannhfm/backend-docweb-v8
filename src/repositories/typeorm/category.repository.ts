import { Repository } from 'typeorm';
import { Category } from '@/entities/category.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class CategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = appDataSource.getRepository(Category);
    }

    async create(category: string, content: string): Promise<void> {
        await this.repository.save({ category, content });
    }

    async findAll(): Promise<Category[]> {
        return this.repository.find();
    }

    async findById(id: string): Promise<Category | null> {
        return this.repository.findOne({ where: { category: id } });
    }

    async update(id: string, updates: Partial<Category>): Promise<void> {
        await this.repository.update({ category: id }, updates);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ category: id });
    }
}
