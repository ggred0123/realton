import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { UserBaseInfo } from "../auth/type/user-base-info.type";
import { UserDto } from "./dto/user.dto";
import { UpdateUserPayload } from "./payload/update-user.payload";
import { UpdateUserData } from "../auth/type/update-user-data.type";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUser(user: UserBaseInfo): Promise<UserDto> {
    return UserDto.from(user);
  }
}
