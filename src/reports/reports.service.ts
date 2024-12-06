import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ReportsDto } from './dto/reports.dto';
import { ReportsRepository } from './reports.repository';

@Injectable()
export class ReportsService {
  constructor(private readonly reportsRepository: ReportsRepository) {}

  async getReportsByDate(date: Date): Promise<ReportsDto[] | null> {

    const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    const endOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);

    const reports = await this.reportsRepository.findReportsByDate(startOfDay, endOfDay);

    if (!reports || reports.length === 0) {
      return null;
    }

    return reports.map((report) => ReportsDto.from(report));
  }
}
