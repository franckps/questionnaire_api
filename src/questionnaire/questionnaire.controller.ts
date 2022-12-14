import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  Request,
} from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';

@Controller('api/questionnaires')
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  @Post()
  create(@Body() createQuestionnaireDto: CreateQuestionnaireDto) {
    return this.questionnaireService.create(createQuestionnaireDto);
  }

  @Get()
  findAll(@Request() request: Request) {
    const { applier } = request as any;
    return this.questionnaireService.findAll(applier?.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionnaireService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionnaireDto: UpdateQuestionnaireDto,
  ) {
    return this.questionnaireService.update(id, updateQuestionnaireDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionnaireService.remove(id);
  }
}
