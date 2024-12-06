import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { ReportsDto } from "./dto/reports.dto";
import { ReportsRepository } from "./reports.repository";
import { DateQuery } from "./query/reports.query";
@Injectable()
export class ReportsService {
  constructor(private readonly reportsRepository: ReportsRepository) {}

  async getReportsByDate(query: DateQuery): Promise<ReportsDto | null> {
    return this.reportsRepository.findReportsByDate(query);
  }
}
