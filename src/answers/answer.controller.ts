import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
  Post,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";
import { CurrentUser } from "../auth/decorator/user.decorator";
import { UserBaseInfo } from "../auth/type/user-base-info.type";
import { AnswerService } from "./answer.service";
import { CreateAnswersPayload } from "./payload/create-answers.payload";
@Controller("users")
export class AnswerController {
  constructor(private readonly answerService: AnswerService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createAnswers(
    @Body() createAnswersPayload: CreateAnswersPayload,
    @CurrentUser() user: UserBaseInfo
  ) {
    return this.answerService.createAnswers(createAnswersPayload, user);
  }
}
