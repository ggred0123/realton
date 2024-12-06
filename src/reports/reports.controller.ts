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
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { ReportsDto } from './dto/reports.dto';
import { CurrentUser } from '../auth/decorator/user.decorator';
import { UserBaseInfo } from '../auth/type/user-base-info.type';



@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  async getReportsByDate(@Query('date') date: string): Promise<ReportsDto[] | null> {
    // 입력받은 datetime을 Date 객체로 변환
    const dateObject = new Date(date);

    if (isNaN(dateObject.getTime())) {
      throw new Error('Invalid datetime format. Please provide a valid ISO datetime.');
    }

    const reports = await this.reportsService.getReportsByDate(dateObject);

    return reports;
  }
}
