import { AnalysisResultRepository } from '@/repositories/typeorm/analysis-result.repository';
import { AttentionPointRepository } from '@/repositories/typeorm/attention-point.repository';
import { DifferenceRepository } from '@/repositories/typeorm/difference.repository';
import { SourceRepository } from '@/repositories/typeorm/source.repository';
import { AnalysisRepository } from '@/repositories/typeorm/analysis.repository';
import { In } from 'typeorm';

interface DifferenceDetails {
  ambiente: string;
  tabela: string;
  chave: string;
  valor: string;
}

interface AttentionPointDetails {
  fonte: string;
  pontoAtencao: number;
  categoria: string;
  totalPontos: number;
  linhasFonte: string;
  diferencas: DifferenceDetails[];
}

export class CreateAnalysisProcessUseCase {
  constructor(
    private analysisResultRepository: AnalysisResultRepository,
    private attentionPointRepository: AttentionPointRepository,
    private differenceRepository: DifferenceRepository,
    private sourceRepository: SourceRepository,
    private dictionaryRepository: AnalysisRepository
  ) {}

  async handler(data: {
    id: string;
    fontes: string[];
    categorys: string[];
    analysisId: string;
  }): Promise<void> {
    const { id, fontes, categorys, analysisId } = data;

    const analysisResult = await this.analysisResultRepository.create({
      id_analysis: analysisId,
      fontes: fontes.length,
      fontes_points: 0,
      total_points: 0,
      status: 'processando',
      dic: id,
    });

    let whereCondition = {};
    if (fontes.length > 0) {
      whereCondition = { name: In(fontes) };
    } else {
      whereCondition = { category: In(categorys) };
    }

    const sourceRecords = await this.sourceRepository.findByConditions(whereCondition);
    const analysisRecord = await this.dictionaryRepository.findById(id);

    if (!analysisRecord) {
      throw new Error('Analysis not found');
    }

    const analysisData = analysisRecord.analysis;
    const keyDetailsMap: any = new Map();
    const keys = new Set<string>();

    for (const key in analysisData) {
      if (analysisData.hasOwnProperty(key)) {
        const entries = analysisData[key];
        for (const entry of entries) {
          const keyDetail = entry.chave.split(':')[1];
          keys.add(keyDetail);

          if (!keyDetailsMap.has(keyDetail)) {
            keyDetailsMap.set(keyDetail, []);
          }
          keyDetailsMap.get(keyDetail).push({
            instalacao: entry.instalacao,
            tabela: entry.tabela,
            dif: entry.dif,
            chave: entry.chave,
          });
        }
      }
    }

    const uniqueSources = new Set<string>();
    let totalAttentionPoints = 0;

    console.log(sourceRecords);

    for (const source of sourceRecords) {
      const sourceName = source.name;
      const category = source.category || 'N/A';
      const sourceContent = source.source;

      if (!sourceContent) {
        console.error('Source content is empty for source:', sourceName);
        continue;
      }

      const lines = sourceContent.split('\n');

      if (lines.length === 0) {
        console.error('No lines found for source:', sourceName);
        continue;
      }

      let pointNumber = 0;

      for (const key of keys) {
        let localFontCount = 0;
        const linesWithKeys = new Set<number>();

        const keyRegex = new RegExp(`\\b${key}\\b`);

        for (let i = 0; i < lines.length; i++) {
          if (keyDetailsMap.has(key)) {
            const details = keyDetailsMap.get(key);
            for (const detail of details) {
              if (detail.tabela.startsWith('SIX')) {
                if (lines[i].includes('dbsetorder') || lines[i].includes('posicione')) {
                  if (new RegExp(`\\b${key.slice(0, 3)}\\b`).test(lines[i])) {
                    linesWithKeys.add(i + 1);
                    localFontCount++;
                  }
                }
              } else {
                if (keyRegex.test(lines[i])) {
                  linesWithKeys.add(i + 1);
                  localFontCount++;
                }
              }
            }
          }
        }

        if (localFontCount > 0) {
          uniqueSources.add(sourceName);

          const attentionPoint = await this.attentionPointRepository.create({
            id_analysis: analysisResult.id_analysis,
            source_name: sourceName,
            category: category,
            total_points: localFontCount,
            point_number: ++pointNumber,
            line_numbers: [...linesWithKeys].join(','),
          });

          totalAttentionPoints++;

          if (keyDetailsMap.has(key)) {
            for (const detail of keyDetailsMap.get(key)) {
              const difference = await this.differenceRepository.create({
                attention_point_id: attentionPoint.id,
                source_name: sourceName,
                environment: detail.instalacao,
                table_name: detail.tabela,
                key: detail.chave,
                value: detail.dif,
              });
            }
          }
        }
      }
    }

    await this.analysisResultRepository.update(analysisResult.id_analysis, {
      fontes_points: uniqueSources.size,
      total_points: totalAttentionPoints,
      status: 'concluido',
    });
  }
}