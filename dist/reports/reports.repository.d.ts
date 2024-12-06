import { PrismaService } from '../common/services/prisma.service';
export declare class ReportsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findReportsByDate(startOfDay: Date, endOfDay: Date): Promise<{
        id: number;
        userId: number;
        answersId: number;
        aiFeedBack: string;
        createdAt: Date;
    }[]>;
}
