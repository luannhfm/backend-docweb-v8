import { Repository } from 'typeorm';
import { Analysis } from '@/entities/analysis.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';

export class AnalysisRepository {
  private repository: Repository<Analysis>;

  constructor() {
    this.repository = appDataSource.getRepository(Analysis);
  }

  async updateAnalysisStatus(jsonAnalysis: any, analysisId: string): Promise<void> {
    const result = await this.repository.update(
      { id_analysis: analysisId },
      { status: 'concluído', analysis: jsonAnalysis }
    );
    if (result.affected === 0) {
      console.log('Nenhum registro foi atualizado. Verifique se o ID está correto.');
    } else {
      console.log('Registro atualizado com sucesso.');
    }
  }
}
