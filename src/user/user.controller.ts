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
} from "@nestjs/common";
import { UserService } from "./user.service";
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
} from "@nestjs/swagger";
import { UserDto } from "./dto/user.dto";
import { JwtAuthGuard } from "../auth/guard/jwt-auth.guard";
import { UpdateUserPayload } from "./payload/update-user.payload";
import { CurrentUser } from "../auth/decorator/user.decorator";
import { UserBaseInfo } from "../auth/type/user-base-info.type";
import { ApiTags } from "@nestjs/swagger";
@Controller("users")
@ApiTags("user API")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: "유저 정보를 가져옵니다" })
  @ApiOkResponse({ type: UserDto })
  async getUser(@CurrentUser() user: UserBaseInfo): Promise<UserDto> {
    return this.userService.getUser(user);
  }
}
