export declare class ReportsDto {
    id: number;
    user_id: number;
    answer_id: number;
    ai_feedback: string;
    createdAt: Date;
    static from(data: any): ReportsDto;
}
