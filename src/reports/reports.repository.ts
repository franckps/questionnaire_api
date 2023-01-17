import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ReportsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async questionnaireData(id: string) {
    const questionnaire = await this.prisma.questionnaire.findFirstOrThrow({
      where: { id },
    });
    const questionnaireData = await this.prisma.questionnaireData.findMany({
      where: { idQuestionnaire: id },
    });
    const questions = await this.prisma.question.findMany({
      where: { idQuestionnaire: id },
    });
    const answers = await this.prisma.answer.findMany({
      where: {
        idQuestionnaireData: { in: questionnaireData.map((elm) => elm.id) },
      },
    });
    return {
      questionnaire,
      questionnaireData,
      questions,
      answers,
    };
  }
}
