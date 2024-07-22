// src/utils/file.utils.ts
import * as fs from 'fs/promises';

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

// Retorna quantidade de quebra de linhas em um fonte.
export function countBlankLines(source: string): number {
  return source.split('\n').filter(line => line.trim() === '').length;
}

// Retorna a quantidade de linhas comentadas em um fonte.
export function countCommentedLines(lines: string[]): number {
  let commentedLinesCount = 0;
  let insideBlockComment = false;

  for (const line of lines) {
    if (insideBlockComment) {
      if (line.includes('*/')) {
        insideBlockComment = false;
        commentedLinesCount++;
        const endIndex = line.indexOf('*/') + 2;
        const remainingLine = line.substring(endIndex);
        if (remainingLine.trim().startsWith('//')) {
          commentedLinesCount++;
        }
      } else {
        commentedLinesCount++;
      }
    } else {
      if (line.includes('//')) {
        commentedLinesCount++;
      } else if (line.includes('/*')) {
        insideBlockComment = true;
        commentedLinesCount++;
        if (line.trim().endsWith('*/')) {
          insideBlockComment = false;
        }
      }
    }
  }

  return commentedLinesCount;
}

// Retorna se o fonte é da categoria ponto de entrada.
export async function _isPE(value: string): Promise<boolean> {
  const peValues: string[] = [];

  if (peValues.length === 0) {
    const file = await fs.open('./values.txt', 'r');
    for await (const line of file.readLines()) {
      peValues.push(line);
    }
  }
  for (const v of peValues) {
    const regex = new RegExp(`${v.toUpperCase()}`, 'g');
    if (value.toUpperCase().match(regex)) {
      return true;
    }
  }

  return false;
}

// Mapeia e retorna as User Functions do fonte passado por parametro.
export function _findUserFunctions(text: string): RegExpMatchArray | null {
  const pattern = /\b[uU][sS][eE][rR]\s+[fF][uU][nN][cC][tT][iI][oO][nN]\s+\w+\s*/g;
  return text.match(pattern);
}

// Mapeia e retorna as Static Functions do fonte passado por parametro.
export function _findStaticFunctions(text: string): RegExpMatchArray | null {
  const pattern = /\b[sS][tT][aA][tT][iI][cC]\s+[fF][uU][nN][cC][tT][iI][oO][nN]\s+\w+\s*/g;
  return text.match(pattern);
}

export function _findFunctionClose(text: string): RegExpMatchArray | null {
  const pattern = /^\b[rR][eE][tT][uU][rR][nN]\s*\w*\s*/g;
  return text.match(pattern);
}

export function _findOpenClass(text: string): RegExpMatchArray | null {
  const pattern = /\b[cC][lL][aA][sS][sS]\s+\w+\s*/g;
  return text.match(pattern);
}

export function _findClassMethods(text: string): RegExpMatchArray | null {
  const pattern = /\b[mM][eE][tT][hH][oO][dD]\s+\w*\s*\(\)/g;
  return text.match(pattern);
}

export function _findClassClose(text: string): RegExpMatchArray | null {
  const pattern = /^\b[eE][nN][dD][cC][lL][aA][sS][sS]\s*\w*\s*/g;
  return text.match(pattern);
}

export function _findTables(text: string): string[] {
  const res: string[] = [];

  const pattern = /retsqlname\(["']([^"']+)["']\)/;
  const result = text.toLowerCase().match(pattern);

  if (result) {
    res.push(result[1].toUpperCase());
  }

  const pattern2 = /setalias\(["']([^"']+)["']\)/;
  const result2 = text.toLowerCase().match(pattern2);

  if (result2) {
    res.push(result2[1].toUpperCase());
  }

  const pattern3 = /dbselectarea\(["']([^"']+)["']\)/;
  const result3 = text.toLowerCase().match(pattern3);

  if (result3) {
    res.push(result3[1].toUpperCase());
  }

  return res.filter((item, index) => res.indexOf(item) === index);
}

export function _findFields(program: Program, text: string): void {
  if (program && program.tables) {
    for (const t of program.tables) {
      const pattern2 = new RegExp(`${t.name.toLowerCase()}\_\\w*`, 'g');
      const result2 = text.toLowerCase().match(pattern2);
      if (result2) {
        for (const r of result2) {
          t.fields.push(r.toUpperCase());
        }
      } else {
        const pattern = new RegExp(
          `${t.name.substring(1).toLowerCase()}\_\\w*`,
          'g'
        );
        const result = text.toLowerCase().match(pattern);
        if (result) {
          for (const r of result) {
            t.fields.push(r.toUpperCase());
          }
        }
      }

      t.fields = t.fields.filter((item, index) => t.fields.indexOf(item) === index);
    }
  }
}
