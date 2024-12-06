import { ApiProperty } from '@nestjs/swagger';
import { UserData } from '../type/user-data.type';

export class UserDto {
  @ApiProperty({
    description: '유저 ID',
    type: Number,
  })
  id!: number;

  @ApiProperty({
    description: '이메일',
    type: String,
  })
  email!: string;

  @ApiProperty({
    description: '이름',
    type: String,
  })
  name!: string;

  @ApiProperty({
    description: '경험치',
    type: Number,
  })
  totalExp!: number;
  


  static from(data: UserData): UserDto {
    return {
      id: data.id,
      email: data.email,
      name: data.name,
      totalExp: data.totalExp
    };
  }
}
