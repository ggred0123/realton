import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/services/prisma.service';
import { ReportsData } from './type/Reports-data.type';

@Injectable()
export class ReportsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findReportsByDate(startOfDay: Date, endOfDay: Date) {
    return this.prisma.reports.findMany({
      where: {
        createdAt: {
          gte: startOfDay, // 시작 시간 이상
          lte: endOfDay,   // 끝 시간 이하
        },
      },
    });
  }
}