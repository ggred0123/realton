import { AnswersRepository } from "./answers.repository";
import { CreateAnswersPayload } from "./payload/create-answers.payload";
import { AnswersDto } from "./dto/answers.dto";
import { UserBaseInfo } from "src/auth/type/user-base-info.type";
import { DateQuery } from "./query/date.query";
export declare class AnswersService {
    private readonly answersRepository;
    constructor(answersRepository: AnswersRepository);
    createAnswers(payload: CreateAnswersPayload, user: UserBaseInfo): Promise<AnswersDto>;
    getAnswersByDate(query: DateQuery, user: UserBaseInfo): Promise<AnswersDto | null>;
}
