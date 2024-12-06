import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { AnswersRepository } from "./activity.repository";
import { CreateAnswersPayload } from "./payload/create-activity.payload";
import { AnswersDto, AnswersListDto } from "./dto/activity.dto";
import { CreateAnswersData } from "./type/create-activity-data.type";
import { AnswersQuery } from "./query/activity.query";
import { AnswersLocationQuery } from "./query/activity-location.query";
import { UpdateAnswersData } from "./type/update-activity-data.type";
import { PatchUpdateAnswersPayload } from "./payload/patch-update-activity.payload";
import { PutUpdateAnswersPayload } from "./payload/put-update-activity.payload";
import { UserBaseInfo } from "src/auth/type/user-base-info.type";
import { get } from "lodash";

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

    const answer = await this.answersRepository.createAnswers(createData);

    return AnswersDto.from(answer);
  }

  async getMyAnswerss(user: UserBaseInfo): Promise<AnswersListDto> {
    const activitys = await this.activityRepository.getMyAnswerss(user.id);

    return AnswersListDto.from(activitys);
  }
  async getRecentActivities(user: UserBaseInfo): Promise<AnswersListDto> {
    const activitys = await this.activityRepository.getRecentActivities(
      user.id
    );

    return AnswersListDto.from(activitys);
  }
}
