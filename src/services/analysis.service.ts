import { Analysis } from '@/entities/analysis.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export async function updateAnalysisStatus(jsonAnalysis: any, analysisId: string) {

  const analysisRepository = appDataSource.getRepository(Analysis);

  try {
    const result = await analysisRepository.update({ id_analysis: analysisId }, {
      status: 'concluído',
      analysis: jsonAnalysis,
    });

    if (result.affected === 0) {
      throw new Error('Nenhum registro foi atualizado. Verifique se o ID está correto.');
    }
  } catch (error) {
    console.error('Erro ao atualizar a análise:', error);
    throw error;
  }
}