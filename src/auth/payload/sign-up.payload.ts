import { IsDate, IsEmail, IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class SignUpPayload {
  @IsEmail()
  @ApiProperty({
    description: '이메일',
    type: String,
  })
  email!: string;

  @IsString()
  @ApiProperty({
    description: '비밀번호',
    type: String,
  })
  password!: string;

  @IsString()
  @ApiProperty({
    description: '이름',
    type: String,
  })
  name!: string;

  @IsInt()
  @ApiProperty({
    description: '경험치',
    type: Number,
  })
  totalExp!: number;
}
