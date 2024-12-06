import { ReportsService } from "./reports.service";
import { ReportsDto } from "./dto/reports.dto";
import { UserBaseInfo } from "../auth/type/user-base-info.type";
import { DateQuery } from "./query/reports.query";
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getReports(query: DateQuery, user: UserBaseInfo): Promise<ReportsDto | null>;
}
