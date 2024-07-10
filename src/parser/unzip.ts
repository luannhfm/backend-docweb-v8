/*import * as fs from 'fs';
import * as path from 'path';
import * as fsp from 'fs/promises';
import * as unzipper from 'unzipper';
import * as etl from 'etl';
import * as chardet from 'chardet';
import * as iconv from 'iconv-lite';
import { Source } from '@/entities/source.entity';
import { Hist } from '@/entities/hist.entity';
import { Reserv } from '@/entities/reserv.entity';
import { SourceFunction } from '@/entities/source-function.entity';
import { SourceTable, SourceTableField } from '@/entities/source-table.entity';
import { parseFile, Program } from './parseFile';
import { appDataSource } from '@/lib/typeorm/typeorm';
import { Brackets } from 'typeorm';

export async function unzip(uid: string, filePath: string, user: string, commit: string) {
    fs.createReadStream(filePath)
        .pipe(unzipper.Parse())
        .pipe(
            etl.map(async (entry: any) => {
                if (entry.type === 'File') {
                    const buffer = await entry.buffer();
                    const filename = path.basename(entry.path);
                    const fileext = path.extname(entry.path).toLowerCase();

                    const detectedEncoding = chardet.detect(buffer) || 'UTF-8';
                    let content = buffer.toString('utf-8');

                    if (['.prw', '.prx', '.tlpp'].includes(fileext)) {
                        content = iconv.decode(buffer, detectedEncoding);
                        buffer = iconv.encode(content, 'UTF-8');
                    }

                    if (['.prw', '.prx', '.tlpp'].includes(fileext)) {
                        if (!fs.existsSync('tmp/')) {
                            fs.mkdirSync('tmp/');
                        }

                        const outfile = `tmp/${filename}_${uid}.dat`;
                        await fsp.writeFile(outfile, buffer);

                        try {
                            const result: Program = await parseFile(outfile);
                            const dbuid = await Source.findOne({ where: {} });
                            const uuid = dbuid?.uuid || uid;

                            const existingSource = await Source.findOne({
                                where: { uuid, name: filename },
                            });

                            if (existingSource && existingSource.category !== result.category) {
                                console.log(`${filename}: ${existingSource.category} => ${result.category}`);
                            }

                            if (existingSource) {
                                const sourceOldHist = existingSource.source;
                                await Source.delete({ uuid, name: filename });

                                await Hist.create({
                                    fonte: filename,
                                    user,
                                    action: 'UPDATE',
                                    source: result.source,
                                    commit,
                                    sourceOld: sourceOldHist,
                                });
                            } else {
                                await Hist.create({
                                    fonte: filename,
                                    user,
                                    action: 'CREATE',
                                    source: result.source,
                                    commit,
                                });
                            }

                            const lines = (result.source ?? '').split('\n');
                            const blankLinesCount = utils.countBlankLines(result.source ?? '');
                            const commentedLinesCount = utils.countCommentedLines(lines);

                            const newSource = await Source.create({
                                uuid,
                                label: 'Documentação',
                                category: result.category,
                                name: filename,
                                reserv: false,
                                tables: result.tables.length,
                                functions: result.functions.length,
                                source: result.source,
                                line: lines.length,
                                blankLines: blankLinesCount,
                                commentedLines: commentedLinesCount,
                            });

                            const currentDate = new Date();
                            const dataFim = currentDate.toLocaleDateString('pt-BR');
                            const horaFim = currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

                            await Reserv.update(
                                { source_dev: result.source, data_fim: dataFim, hora_fim: horaFim },
                                {
                                    where: {
                                        fonte: filename,
                                        [Brackets]: [
                                            { data_fim: null },
                                            { data_fim: '' }
                                        ]
                                    }
                                }
                            );

                            for (const func of result.functions) {
                                await SourceFunction.create({
                                    uuid,
                                    type: func.type,
                                    name: func.name,
                                    source: func.body.join('\n'),
                                    source: newSource,
                                    line: lines.length,
                                    blankLines: blankLinesCount,
                                    commentedLines: commentedLinesCount,
                                });
                            }

                            for (const table of result.tables) {
                                const newTable = await SourceTable.create({
                                    uuid,
                                    name: table.name,
                                    source: newSource,
                                });

                                for (const field of table.fields) {
                                    await SourceTableField.create({
                                        uuid,
                                        name: field,
                                        sourceTable: newTable,
                                    });
                                }
                            }
                        } catch (ex) {
                            console.error(ex);
                        }
                    }
                } else {
                    entry.autodrain();
                }
            }),
        )
        .promise()
        .then(() => {
            console.log('Processamento finalizado');
        });
}


*/