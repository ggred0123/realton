import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import { ReportsService } from "./reports.service";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";
import { ReportsDto } from "./dto/reports.dto";
import { CurrentUser } from "../auth/decorator/user.decorator";
import { UserBaseInfo } from "../auth/type/user-base-info.type";
import { DateQuery } from "./query/reports.query";

@Controller("reports")
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "리포트 정보를 가져옵니다" })
  @ApiOkResponse({ type: ReportsDto })
  async getReports(
    @Query() query: DateQuery,
    @CurrentUser() user: UserBaseInfo
  ): Promise<ReportsDto | null> {
    return this.reportsService.getReportsByDate(query);
  }
}
