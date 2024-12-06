import { ReportsDto } from './dto/reports.dto';
import { ReportsRepository } from './reports.repository';
export declare class ReportsService {
    private readonly reportsRepository;
    constructor(reportsRepository: ReportsRepository);
    getReportsByDate(date: Date): Promise<ReportsDto[] | null>;
}
