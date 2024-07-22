import * as fs from 'fs/promises';
import { Category } from '@/entities/category.entity';
import { appDataSource } from '@/lib/typeorm/typeorm'; 
import * as utils from '../utils/file.utils';
import { Not } from 'typeorm';

export interface Program {
  category: string;
  source?: string;
  functions: Function[];
  tables: Table[];
}

export interface Function {
  type: string;
  name: string;
  body: string[];
}

export interface Table {
  name: string;
  fields: string[];
}

export async function parseFile(path: string): Promise<Program> {
  let cat: string = 'NÃO CATEGORIZADO';
  let lines: string[] = [];
  let countTables = 0;
  let countFunctions = 0;

  const program: Program = {
    category: cat,
    functions: [],
    tables: [],
    source: '',
  };

  try {
    const file = await fs.open(path, 'r');
    for await (const line of file.readLines()) {
      lines.push(line);
    }

    program.source = lines.join('\n');

    // Recuperar categorias e suas expressões da tabela 'Category'
    const categoryRepository = appDataSource.getRepository(Category);
    const categories = await categoryRepository.find({
      where: [
        { category: Not('PONTO DE ENTRADA') },
        { category: Not('CLASSES') }
      ]
    });

    // Verificação da expressão "Categoria:" na primeira linha
    if (lines.length > 0) {
      const firstLine = lines[0].toLowerCase();
      const match = firstLine.match(/categoria:\s*(.*)/i);
      if (match) {
        program.category = match[1].trim().toUpperCase();
        const category = match[1].trim().toUpperCase();
        const content = match[1].trim().toUpperCase();

        // Verifica se a categoria já existe
        const categoryExists = await categoryRepository.findOne({ where: { category } });

        // Se a categoria já existe, retorne um erro
        if (!categoryExists) {
          const newCategory = categoryRepository.create({
            category,
            content
          });
          await categoryRepository.save(newCategory);
        }
      } else {
        // Processa as demais linhas se a primeira não contiver "Categoria:"
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].toLowerCase();

          for (const category of categories) {
            const expressions = category.content.split(';'); // expressões devem estar separadas por ponto e vírgula
            if (expressions.some(exp => line.match(exp))) {
              program.category = category.category;
              break;
            }
          }

          const tablesFound = utils._findTables(line);
          if (tablesFound) {
            for (const t of tablesFound.filter((item, index) => tablesFound.indexOf(item) === index)) {
              countTables++;
              const table: Table = {
                name: t,
                fields: [],
              };
              program.tables.push(table);
            }
          }

          let fn = utils._findUserFunctions(line);
          if (fn) {
            const isPE = await utils._isPE(line);
            if (isPE) {
              program.category = 'PONTO DE ENTRADA';
            }

            countFunctions++;
            const f: Function = {
              type: 'User',
              name: fn[0],
              body: [],
            };
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
            countFunctions++;
            const f: Function = {
              type: 'Static',
              name: fn[0],
              body: [],
            };
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
              const f: Function = {
                type: 'Method',
                name: fn[0],
                body: [],
              };
              for (let j = i; j < lines.length; j++) {
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
