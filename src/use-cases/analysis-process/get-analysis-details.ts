import { AnalysisResultRepository } from '@/repositories/typeorm/analysis-result.repository';
import { AttentionPointRepository } from '@/repositories/typeorm/attention-point.repository';
import { DifferenceRepository } from '@/repositories/typeorm/difference.repository';

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

interface AnalysisDetailsResponse {
  id: string;
  dic: string;
  totalFont: number;
  totalPoint: number;
  fontesPoint: number;
  dataImpressao: string;
  pontosAtencao: AttentionPointDetails[];
}

export class GetAnalysisDetailsUseCase {
  constructor(
    private analysisResultRepository: AnalysisResultRepository,
    private attentionPointRepository: AttentionPointRepository,
    private differenceRepository: DifferenceRepository
  ) {}

  async handler(analysisId: string): Promise<AnalysisDetailsResponse> {
    const analysisResult = await this.analysisResultRepository.findById(analysisId);

    if (!analysisResult) {
      throw new Error('Analysis not found');
    }

    const attentionPoints = await this.attentionPointRepository.findByAnalysisId(analysisId);

    const response: AnalysisDetailsResponse = {
      id: analysisResult.id_analysis,
      dic: analysisResult.dic,
      totalFont: analysisResult.fontes,
      totalPoint: analysisResult.total_points,
      fontesPoint: analysisResult.fontes_points,
      dataImpressao: new Date().toISOString(),
      pontosAtencao: [],
    };

    for (const point of attentionPoints) {
      const differences = await this.differenceRepository.findByAttentionPointId(point.id);

      response.pontosAtencao.push({
        fonte: point.source_name,
        pontoAtencao: point.point_number,
        categoria: point.category,
        totalPontos: point.total_points,
        linhasFonte: point.line_numbers,
        diferencas: differences.map(difference => ({
          ambiente: difference.environment,
          tabela: difference.table_name,
          chave: difference.key,
          valor: difference.value,
        })),
      });
    }

    return response;
  }
}
