import { ReportsData } from "../type/reports.data.type";
export declare class ReportsDto {
    id: number;
    userId: number;
    answersId: number;
    aiFeedBack: string;
    createdAt: Date;
    static from(data: ReportsData): ReportsDto;
}
