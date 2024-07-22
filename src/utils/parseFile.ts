import * as fs from 'fs/promises';
import * as utils from '../utils/file.utils';
import { CategoryRepository } from '@/repositories/typeorm/category.repository';

interface Program {
  category: string;
  source?: string;
  functions: Function[];
  tables: Table[];
  blankLines: number;
  commentedLines: number;
}

interface Function {
  type: string;
  name: string;
  body: string[];
}

interface Table {
  name: string;
  fields: string[];
}

export async function parseFile(path: string): Promise<Program> {
  let category = 'NÃO CATEGORIZADO';
  const lines: string[] = [];
  const program: Program = {
    category,
    functions: [],
    tables: [],
    source: '',
    blankLines: 0,
    commentedLines: 0,
  };

  const categoryRepository = new CategoryRepository();

  try {
    const file = await fs.open(path, 'r');
    for await (const line of file.readLines()) {
      lines.push(line);
    }

    program.source = lines.join('\n');
    program.blankLines = utils.countBlankLines(program.source);
    program.commentedLines = utils.countCommentedLines(lines);

    const categories = await categoryRepository.findAll();
    const relevantCategories = categories.filter(cat => 
      cat.category !== 'PONTO DE ENTRADA' && cat.category !== 'CLASSES'
    );

    if (lines.length > 0) {
      const firstLine = lines[0].toLowerCase();
      const match = firstLine.match(/categoria:\s*(.*)/i);
      if (match) {
        program.category = match[1].trim().toUpperCase();
      } else {
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].toLowerCase();

          for (const category of relevantCategories) {
            const expressions = category.content.split(';');
            if (expressions.some(exp => line.match(exp))) {
              program.category = category.category;
              break;
            }
          }

          const tablesFound = utils._findTables(line);
          if (tablesFound) {
            for (const t of tablesFound.filter((item, index) => tablesFound.indexOf(item) === index)) {
              program.tables.push({ name: t, fields: [] });
            }
          }

          let fn = utils._findUserFunctions(line);
          if (fn) {
            const isPE = await utils._isPE(line);
            if (isPE) {
              program.category = 'PONTO DE ENTRADA';
            }

            const f: Function = { type: 'User', name: fn[0], body: [] };
            for (let j = i; j < lines.length; j++) {
              const line2 = lines[j];
              if (utils._findFunctionClose(line2)) {
                f.body = lines.slice(i, j + 1);
                program.functions.push(f);
                break;
              }
            }
          }

          fn = utils._findStaticFunctions(line);
          if (fn) {
            const f: Function = { type: 'Static', name: fn[0], body: [] };
            for (let j = i; j < lines.length; j++) {
              const line2 = lines[j];
              if (utils._findFunctionClose(line2)) {
                f.body = lines.slice(i, j + 1);
                program.functions.push(f);
                break;
              }
            }
          }

          if (utils._findOpenClass(line)) {
            program.category = 'CLASSES';
            fn = utils._findClassMethods(line);
            if (fn) {
              const f: Function = { type: 'Method', name: fn[0], body: [] };
              for (let j = i, len = lines.length; j < len; j++) {
                const line2 = lines[j];
                if (utils._findFunctionClose(line2)) {
                  f.body = lines.slice(i, j + 1);
                  program.functions.push(f);
                  break;
                }
              }
            }
          }

          utils._findFields(program, line);
        }
      }
    }

    return program;
  } catch (ex) {
    console.error(ex);
    throw ex;
  }
}
