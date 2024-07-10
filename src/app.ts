import 'reflect-metadata'
import fastify from 'fastify';
import { categoryRoutes } from './http/controllers/category/route';
import { histRoutes } from './http/controllers/history/route';
import { userRoutes } from './http/controllers/user/routes';

import cors from '@fastify/cors';

export const app = fastify();

app.register(cors, { 
    origin: '*' 
  });
  
app.register(categoryRoutes);
app.register(histRoutes);
app.register(userRoutes);

//app.register(sourceRoutes);
