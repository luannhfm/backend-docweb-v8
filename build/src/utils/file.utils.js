"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/file.utils.ts
var file_utils_exports = {};
__export(file_utils_exports, {
  _findClassClose: () => _findClassClose,
  _findClassMethods: () => _findClassMethods,
  _findFields: () => _findFields,
  _findFunctionClose: () => _findFunctionClose,
  _findOpenClass: () => _findOpenClass,
  _findStaticFunctions: () => _findStaticFunctions,
  _findTables: () => _findTables,
  _findUserFunctions: () => _findUserFunctions,
  _isPE: () => _isPE,
  countBlankLines: () => countBlankLines,
  countCommentedLines: () => countCommentedLines
});
module.exports = __toCommonJS(file_utils_exports);
var fs = __toESM(require("fs/promises"));
function countBlankLines(source) {
  return source.split("\n").filter((line) => line.trim() === "").length;
}
function countCommentedLines(lines) {
  let commentedLinesCount = 0;
  let insideBlockComment = false;
  for (const line of lines) {
    if (insideBlockComment) {
      if (line.includes("*/")) {
        insideBlockComment = false;
        commentedLinesCount++;
        const endIndex = line.indexOf("*/") + 2;
        const remainingLine = line.substring(endIndex);
        if (remainingLine.trim().startsWith("//")) {
          commentedLinesCount++;
        }
      } else {
        commentedLinesCount++;
      }
    } else {
      if (line.includes("//")) {
        commentedLinesCount++;
      } else if (line.includes("/*")) {
        insideBlockComment = true;
        commentedLinesCount++;
        if (line.trim().endsWith("*/")) {
          insideBlockComment = false;
        }
      }
    }
  }
  return commentedLinesCount;
}
async function _isPE(value) {
  const peValues = [];
  if (peValues.length === 0) {
    const file = await fs.open("./values.txt", "r");
    for await (const line of file.readLines()) {
      peValues.push(line);
    }
  }
  for (const v of peValues) {
    const regex = new RegExp(`${v.toUpperCase()}`, "g");
    if (value.toUpperCase().match(regex)) {
      return true;
    }
  }
  return false;
}
function _findUserFunctions(text) {
  const pattern = /\b[uU][sS][eE][rR]\s+[fF][uU][nN][cC][tT][iI][oO][nN]\s+\w+\s*/g;
  return text.match(pattern);
}
function _findStaticFunctions(text) {
  const pattern = /\b[sS][tT][aA][tT][iI][cC]\s+[fF][uU][nN][cC][tT][iI][oO][nN]\s+\w+\s*/g;
  return text.match(pattern);
}
function _findFunctionClose(text) {
  const pattern = /^\b[rR][eE][tT][uU][rR][nN]\s*\w*\s*/g;
  return text.match(pattern);
}
function _findOpenClass(text) {
  const pattern = /\b[cC][lL][aA][sS][sS]\s+\w+\s*/g;
  return text.match(pattern);
}
function _findClassMethods(text) {
  const pattern = /\b[mM][eE][tT][hH][oO][dD]\s+\w*\s*\(\)/g;
  return text.match(pattern);
}
function _findClassClose(text) {
  const pattern = /^\b[eE][nN][dD][cC][lL][aA][sS][sS]\s*\w*\s*/g;
  return text.match(pattern);
}
function _findTables(text) {
  const res = [];
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
function _findFields(program, text) {
  if (program && program.tables) {
    for (const t of program.tables) {
      const pattern2 = new RegExp(`${t.name.toLowerCase()}_\\w*`, "g");
      const result2 = text.toLowerCase().match(pattern2);
      if (result2) {
        for (const r of result2) {
          t.fields.push(r.toUpperCase());
        }
      } else {
        const pattern = new RegExp(
          `${t.name.substring(1).toLowerCase()}_\\w*`,
          "g"
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  _findClassClose,
  _findClassMethods,
  _findFields,
  _findFunctionClose,
  _findOpenClass,
  _findStaticFunctions,
  _findTables,
  _findUserFunctions,
  _isPE,
  countBlankLines,
  countCommentedLines
});
