/*import * as fs from 'fs/promises';
import { Category } from '@/entities/category.entity';
import * as utils from '@/utils/file.utils';

interface Program {
    category: string;
    source?: string;
    functions: Function[];
    tables: Table[];
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
    };

    try {
        const file = await fs.open(path, 'r');
        for await (const line of file.readLines()) {
            lines.push(line);
        }

        program.source = lines.join('\n');

        const categories = await Category.find();

        if (lines.length > 0) {
            const firstLine = lines[0].toLowerCase();
            const match = firstLine.match(/categoria:\s*(.*)/i);
            if (match) {
                program.category = match[1].trim().toUpperCase();
            } else {
                for (const line of lines) {
                    for (const category of categories) {
                        const expressions = category.content.split(';');
                        if (expressions.some(exp => line.match(new RegExp(exp, 'i')))) {
                            program.category = category.category;
                            break;
                        }
                    }

                    const tablesFound = utils.findTables(line);
                    if (tablesFound) {
                        for (const t of tablesFound) {
                            const table: Table = {
                                name: t,
                                fields: [],
                            };
                            program.tables.push(table);
                        }
                    }

                    let fn = utils.findUserFunctions(line);
                    if (fn) {
                        const f: Function = {
                            type: 'User',
                            name: fn[0],
                            body: [],
                        };
                        for (let j = lines.indexOf(line); j < lines.length; j++) {
                            const line2 = lines[j];
                            if (utils.findFunctionClose(line2)) {
                                f.body = lines.slice(lines.indexOf(line), j + 1);
                                program.functions.push(f);
                                break;
                            }
                        }
                    }

                    fn = utils.findStaticFunctions(line);
                    if (fn) {
                        const f: Function = {
                            type: 'Static',
                            name: fn[0],
                            body: [],
                        };
                        for (let j = lines.indexOf(line); j < lines.length; j++) {
                            const line2 = lines[j];
                            if (utils.findFunctionClose(line2)) {
                                f.body = lines.slice(lines.indexOf(line), j + 1);
                                program.functions.push(f);
                                break;
                            }
                        }
                    }

                    if (utils.findOpenClass(line)) {
                        fn = utils.findClassMethods(line);
                        if (fn) {
                            const f: Function = {
                                type: 'Method',
                                name: fn[0],
                                body: [],
                            };
                            for (let j = lines.indexOf(line); j < lines.length; j++) {
                                const line2 = lines[j];
                                if (utils.findFunctionClose(line2)) {
                                    f.body = lines.slice(lines.indexOf(line), j + 1);
                                    program.functions.push(f);
                                    break;
                                }
                            }
                        }
                    }

                    utils.findFields(program, line);
                }
            }
        }

        return program;
    } catch (ex) {
        console.error(ex);
        throw ex;
    }
}
*/