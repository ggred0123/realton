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

export class CreateAnswersPayload {
  @IsString({ each: true })
  @ApiProperty({
    description: "유저 응답들",
    type: [String],
  })
  title!: string[];
}
