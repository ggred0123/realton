import { ReportsDto } from "./dto/reports.dto";
import { ReportsRepository } from "./reports.repository";
import { DateQuery } from "./query/reports.query";
export declare class ReportsService {
    private readonly reportsRepository;
    constructor(reportsRepository: ReportsRepository);
    getReportsByDate(query: DateQuery): Promise<ReportsDto | null>;
}
