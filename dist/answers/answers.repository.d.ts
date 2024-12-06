import { PrismaService } from "../common/services/prisma.service";
import { CreateAnswersData } from "./type/create-answers-data.type";
import { AnswersData } from "./type/answers-data.type";
import { DateQuery } from "./query/date.query";
export declare class AnswersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createAnswer(data: CreateAnswersData): Promise<AnswersData>;
    getAnswersByDate(query: DateQuery): Promise<AnswersData | null>;
}
