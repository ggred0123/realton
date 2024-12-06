import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { AnswersRepository } from "./answers.repository";
import { CreateAnswersPayload } from "./payload/create-answers.payload";
import { AnswersDto, AnswersListDto } from "./dto/answers.dto";
import { CreateAnswersData } from "./type/create-answers-data.type";
import { UserBaseInfo } from "src/auth/type/user-base-info.type";
import { get } from "lodash";
import { DateQuery } from "./query/date.query";
@Injectable()
export class AnswersService {
  constructor(private readonly answersRepository: AnswersRepository) {}

  async createAnswers(
    payload: CreateAnswersPayload,
    user: UserBaseInfo
  ): Promise<AnswersDto> {
    const createData: CreateAnswersData = {
      userId: user.id,
      replies: payload.replies,
    };

    const answer = await this.answersRepository.createAnswer(createData);

    return AnswersDto.from(answer);
  }
  async getAnswersByDate(
    query: DateQuery,
    user: UserBaseInfo
  ): Promise<AnswersDto | null> {
    return this.answersRepository.getAnswersByDate(query);
  }
}
