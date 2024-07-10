import { FastifyInstance } from 'fastify';
import { login } from './login';
import { createUser } from './createUser';
import { getAllUsers } from './getAllUsers';
import { deleteUser } from './deleteUser';
import { updateUser } from './updateUser';

export async function userRoutes(app: FastifyInstance) {
  app.post('/login', login);
  app.post('/users', createUser);
  app.get('/users', getAllUsers);
  app.delete('/users/:id', deleteUser);
  app.post('/users/:id', updateUser);
}
