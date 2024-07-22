import { FastifyInstance } from 'fastify';
import { unzipSource } from './unzip';
import { getAllSources } from './get-all';
import { getSourceDetail } from './get-detail';
import { deleteSource } from './delete';
import { deleteAllSources } from './delete-all';
import { reservSource } from './reserv';
import { updateSource } from './update';

export async function sourceRoutes(app: FastifyInstance) {
  app.post('/source/:user/:commit', unzipSource);
  app.get('/source' , getAllSources);
  app.get('/source/detail/:id', getSourceDetail);
  app.delete('/source/:prw' ,deleteSource)
  app.delete('/source', deleteAllSources);
  app.get('/source/reserv/:prw/:user',reservSource);
  app.post('/source/reserv', reservSource);
  app.get( '/source/category/:prw/:category', updateSource)

}
