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
  Query,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";
import { CurrentUser } from "../auth/decorator/user.decorator";
import { UserBaseInfo } from "../auth/type/user-base-info.type";
import { AnswersService } from "./answers.service";
import { CreateAnswersPayload } from "./payload/create-answers.payload";
import { query } from "express";
import { DateQuery } from "./query/date.query";
@Controller("answers")
@ApiTags("answers API")
export class AnswersController {
  constructor(private readonly answerService: AnswersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async createAnswers(
    @Body() createAnswersPayload: CreateAnswersPayload,
    @CurrentUser() user: UserBaseInfo
  ) {
    return this.answerService.createAnswers(createAnswersPayload, user);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async getAnswers(
    @Query() query: DateQuery,
    @CurrentUser() user: UserBaseInfo
  ) {
    return this.answerService.getAnswersByDate(query, user);
  }
}
