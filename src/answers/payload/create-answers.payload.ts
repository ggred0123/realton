import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsArray,
  IsDate,
  IsDecimal,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";
import { Type } from "class-transformer";

export class CreateAnswersPayload {
  @IsString({ each: true })
  @ApiProperty({
    description: "유저 응답들",
    type: [String],
  })
  replies!: string[];

  @IsDate()
  @Type(() => Date)
  @ApiProperty({
    description: "만들어진 날짜",
    type: Date,
  })
  createdAt!: Date;
}
