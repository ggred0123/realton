import {
  IsDate,
  IsEmail,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { min } from 'lodash';

export class UpdateUserPayload {
  @IsOptional()
  @IsInt()
  @Min(0)
  @ApiPropertyOptional({
    description: '경험치',
    type: Number,
  })
  totalExp?: number | null;}