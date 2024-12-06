import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserBaseInfo } from '../auth/type/user-base-info.type';
import { UserDto } from './dto/user.dto';
import { UpdateUserPayload } from './payload/update-user.payload';
import { UpdateUserData } from '../auth/type/update-user-data.type';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUserById(userId: number): Promise<UserDto> {
    const user = await this.userRepository.getUserById(userId);

    if (!user) {
      throw new NotFoundException('사용자를 찾을 수 없습니다.');
    }

    return UserDto.from(user);
  }


}
