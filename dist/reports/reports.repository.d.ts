import { PrismaService } from "../common/services/prisma.service";
import { ReportsData } from "./type/reports.data.type";
import { DateQuery } from "./query/reports.query";
export declare class ReportsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findReportsByDate(query: DateQuery): Promise<ReportsData | null>;
}
