import { ReportsService } from './reports.service';
import { ReportsDto } from './dto/reports.dto';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getReportsByDate(date: string): Promise<ReportsDto[] | null>;
}
