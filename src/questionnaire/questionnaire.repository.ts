import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto';
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto';

@Injectable()
export class QuestionnaireRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateQuestionnaireDto) {
    const {
      name,
      image,
      quantity,
      endDate,
      link,
      exceedsQuantity,
      canBeOnline,
      deviceIds,
      applierIds,
    } = data;
    let devices: { connect: { id: string }[] },
      appliers: { connect: { id: string }[] };
    if (!!deviceIds)
      devices = {
        connect: deviceIds.map((elm) => ({
          id: elm,
        })),
      };
    if (!!applierIds)
      appliers = {
        connect: applierIds.map((elm) => ({
          id: elm,
        })),
      };

    return this.prisma.questionnaire.create({
      data: {
        name,
        image,
        quantity,
        endDate,
        link,
        exceedsQuantity,
        canBeOnline,
        isActive: true,
        devices,
        appliers,
      },
    });
  }

  async findAll(applierId?: string) {
    return this.prisma.questionnaire.findMany({
      where: {
        isActive: true,
        ...(!!applierId && { appliers: { some: { id: applierId } } }),
      },
      include: {
        appliers: { where: { isActive: true } },
        devices: { where: { isActive: true } },
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.questionnaire.findFirstOrThrow({
      where: { id },
      include: {
        appliers: { where: { isActive: true } },
        devices: { where: { isActive: true } },
      },
    });
  }

  async update(id: string, data: UpdateQuestionnaireDto) {
    const {
      name,
      image,
      quantity,
      endDate,
      link,
      exceedsQuantity,
      canBeOnline,
      deviceIds,
      applierIds,
    } = data;
    let devices: any, appliers: any;
    if (!!deviceIds) {
      const storedADevices = await this.prisma.device.findMany({
        where: {
          isActive: true,
        },
      });
      devices = {
        disconnect: storedADevices
          .filter((elm) => !applierIds.includes(elm.id))
          .map((elm) => ({
            id: elm.id,
          })),
        connect: deviceIds.map((elm) => ({
          id: elm,
        })),
      };
    }
    if (!!applierIds) {
      const storedAAppliers = await this.prisma.applier.findMany({
        where: {
          isActive: true,
        },
      });
      appliers = {
        disconnect: storedAAppliers
          .filter((elm) => !applierIds.includes(elm.id))
          .map((elm) => ({
            id: elm.id,
          })),
        connect: applierIds.map((elm) => ({
          id: elm,
        })),
      };
    }
    await this.prisma.questionnaire.update({
      where: { id },
      data: {
        name,
        image,
        quantity,
        endDate,
        link,
        exceedsQuantity,
        canBeOnline,
        appliers,
        devices,
      },
    });
  }

  async remove(id: string) {
    await this.prisma.questionnaire.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
