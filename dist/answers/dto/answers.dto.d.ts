import { AnswersData } from "../type/answers-data.type";
export declare class AnswersDto {
    id: number;
    userId: number;
    replies: string[];
    createdAt: Date;
    static from(data: AnswersData): AnswersDto;
    static fromArray(answers: AnswersData[]): AnswersDto[];
}
export declare class AnswersListDto {
    answers: AnswersDto[];
    static from(answers: AnswersData[]): AnswersListDto;
}
