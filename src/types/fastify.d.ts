
import 'fastify';
import { MulterFile } from '@/http/controllers/analysis/uploadFiles'; // Ajuste o caminho conforme necessário

declare module 'fastify' {
  interface FastifyRequest {
    files: { [fieldname: string]: MulterFile[] };
  }
}
