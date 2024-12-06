import { UserBaseInfo } from "../auth/type/user-base-info.type";
import { AnswersService } from "./answers.service";
import { CreateAnswersPayload } from "./payload/create-answers.payload";
import { DateQuery } from "./query/date.query";
export declare class AnswersController {
    private readonly answerService;
    constructor(answerService: AnswersService);
    createAnswers(createAnswersPayload: CreateAnswersPayload, user: UserBaseInfo): Promise<import("./dto/answers.dto").AnswersDto>;
    getAnswers(query: DateQuery, user: UserBaseInfo): Promise<import("./dto/answers.dto").AnswersDto | null>;
}
