import {
  makeUpdateAnalysisStatusUseCase
} from "./chunk-ZA6LZKSA.js";
import {
  bufferToStream,
  createCompositeKey,
  getKeyColumnIndices
} from "./chunk-X4V5QVSU.js";

// src/http/controllers/analysis/upload.ts
import multer from "fastify-multer";
import * as readline from "readline";
var storage = multer.memoryStorage();
var upload = multer({ storage });
var jsonAnalysis = {};
var seq = 1;
async function compareCsvFiles(file1, file2, uploadsData, seq2) {
  const stream1 = await bufferToStream(file1.buffer);
  const stream2 = await bufferToStream(file2.buffer);
  const reader1 = readline.createInterface({ input: stream1 });
  const reader2 = readline.createInterface({ input: stream2 });
  const iterator1 = reader1[Symbol.asyncIterator]();
  const iterator2 = reader2[Symbol.asyncIterator]();
  try {
    let header1 = (await iterator1.next()).value.split(";");
    let header2 = (await iterator2.next()).value.split(";");
    let line1 = await iterator1.next();
    let line2 = await iterator2.next();
    while (!line1.done && !line2.done) {
      const columns1 = line1.value.split(";");
      const columns2 = line2.value.split(";");
      const prefix = file1.originalname.substring(0, 3).toUpperCase();
      const keyColumnIndices = await getKeyColumnIndices(prefix);
      const compositeKey = createCompositeKey(header1, columns1, keyColumnIndices);
      columns1.forEach((col, index) => {
        if (columns2[index] && col.trim() !== columns2[index].trim()) {
          const columnName = header1[index] || `Coluna ${index + 1}`;
          if (!jsonAnalysis[prefix]) {
            jsonAnalysis[prefix] = [];
          }
          jsonAnalysis[prefix].push({
            instalacao: uploadsData[0].name.toUpperCase(),
            tabela: file1.originalname.substring(0, 6).toUpperCase(),
            dif: `${columnName}: ${col.trim()}`,
            sequencia: seq2,
            isOk: false,
            chave: `${compositeKey}`
          });
          jsonAnalysis[prefix].push({
            instalacao: uploadsData[1].name.toUpperCase(),
            tabela: file2.originalname.substring(0, 6).toUpperCase(),
            dif: `${columnName}: ${columns2[index].trim()}`,
            sequencia: seq2,
            isOk: false,
            chave: `${compositeKey}`
          });
          seq2++;
        }
      });
      line1 = await iterator1.next();
      line2 = await iterator2.next();
    }
  } catch (err) {
    console.error("Erro ao processar os arquivos:", err);
  } finally {
    reader1.close();
    reader2.close();
  }
}
async function uploadFilesHandler(request, reply) {
  const files = request.files;
  const uploadsData = JSON.parse(request.body.uploadsData);
  const analysisId = request.body.analysisId;
  try {
    const filesByPrefixAndField = {};
    Object.entries(files).forEach(([field, filesArray]) => {
      filesArray.forEach((file) => {
        const prefix = file.originalname.substring(0, 3);
        if (!filesByPrefixAndField[prefix]) {
          filesByPrefixAndField[prefix] = {};
        }
        if (!filesByPrefixAndField[prefix][field]) {
          filesByPrefixAndField[prefix][field] = [];
        }
        filesByPrefixAndField[prefix][field].push(file);
      });
    });
    for (const [prefix, groupedFiles] of Object.entries(filesByPrefixAndField)) {
      const fields = Object.keys(groupedFiles);
      if (fields.length > 1 && groupedFiles[fields[0]].length && groupedFiles[fields[1]].length) {
        for (const file1 of groupedFiles[fields[0]]) {
          for (const file2 of groupedFiles[fields[1]]) {
            console.log(`Comparando ${file1.originalname} com ${file2.originalname}`);
            await compareCsvFiles(file1, file2, uploadsData, seq);
            seq = 1;
          }
        }
      }
    }
    await makeUpdateAnalysisStatusUseCase().handler(jsonAnalysis, analysisId);
    reply.send("Arquivos recebidos e processados.");
  } catch (error) {
    console.error("Erro durante a an\xE1lise:", error);
    if (!reply.sent) {
      reply.status(500).send("Erro ao processar os arquivos.");
    }
  }
}

export {
  uploadFilesHandler
};
