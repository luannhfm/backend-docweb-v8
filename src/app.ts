import 'reflect-metadata'
import fastify from 'fastify';
import { categoryRoutes } from './http/controllers/category/route';
import { histRoutes } from './http/controllers/history/route';
import { userRoutes } from './http/controllers/user/routes';
import { analysisRoutes } from './http/controllers/analysis/route';
import cors from '@fastify/cors';
import { reservRoutes } from './http/controllers/reserv/route';
import { sourceRoutes } from './http/controllers/source/route';
import { validateJwt } from './http/middlewares/jwt-validate';
import fastifyJwt from '@fastify/jwt';
import { env } from './env'
import { analysisProcessRoutes } from './http/controllers/analysis-process/route';

export const app = fastify({
  bodyLimit: 524288000, // 500MB
  connectionTimeout: 300000, // 5 minutes
});

app.register(cors, { 
    origin: '*' 
  });
 
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: '720m' },
});

app.addHook('onRequest', validateJwt);

app.register(categoryRoutes);
app.register(histRoutes);
app.register(userRoutes);
app.register(analysisRoutes)
app.register(reservRoutes)
app.register(sourceRoutes)
app.register(analysisProcessRoutes)



