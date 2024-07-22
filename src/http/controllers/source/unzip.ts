import { FastifyRequest, FastifyReply } from 'fastify';
import { makeUnzipSourceUseCase } from '@/use-cases/factory/source/make-unzip-source-use-case';
import * as path from 'path';
import * as fs from 'fs/promises';
import * as fsSync from 'fs';

export interface FileData {
  file_name: string;
  base64: string;
  mime_type: string;
  fonte: number;
}

interface UploadBody {
  uuid: string;
  files: FileData[];
}

export async function unzipSource(
  request: FastifyRequest<{ Params: { user: string; commit: string }; Body: UploadBody }>,
  reply: FastifyReply
) {
  const { user, commit } = request.params;
  const { uuid, files } = request.body;

  if (!files || files.length === 0) {
    return reply.status(400).send({ message: 'No file uploaded' });
  }

  const fileData = files[0];
  const buffer = Buffer.from(fileData.base64, 'base64');
  const uploadsDir = path.join(process.cwd(), 'uploads');
  const filePath = path.join(uploadsDir, `${uuid}_${fileData.file_name}`);

  if (!fsSync.existsSync(uploadsDir)) {
    await fs.mkdir(uploadsDir, { recursive: true });
  }

  await fs.writeFile(filePath, buffer);

  const unzipSourceUseCase = makeUnzipSourceUseCase();
  try {
    await unzipSourceUseCase.handler(uuid, filePath, user, commit);
    reply.code(200).send({ message: 'Files received and processed' });
  } catch (error) {
    console.error(error);
    reply.status(500).send({ message: 'Error processing the file', error });
  }
}
