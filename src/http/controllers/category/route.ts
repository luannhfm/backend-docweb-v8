import { FastifyInstance } from 'fastify';
import { createCategory } from './create';
import { getAllCategories } from './getAll';
import { deleteCategory } from './delete';
import { updateCategory } from './update';

export async function categoryRoutes(app: FastifyInstance) {
    app.post('/category', createCategory);
    app.get('/category', getAllCategories);
    app.delete('/category/:id', deleteCategory);
    app.post('/category/:id', updateCategory);
    
}
