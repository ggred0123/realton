import { Injectable } from "@nestjs/common";
import { PrismaService } from "../common/services/prisma.service";
import { ReportsData } from "./type/reports.data.type";
import { DateQuery } from "./query/reports.query";

@Injectable()
export class ReportsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findReportsByDate(query: DateQuery): Promise<ReportsData | null> {
    return this.prisma.reports.findFirst({
      where: {
        createdAt: query.createdAt,
      },
    });
  }
}
