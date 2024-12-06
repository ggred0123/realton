import { ApiProperty } from "@nestjs/swagger";
import { IsDate } from "class-validator";
import { Type } from "class-transformer";

export class DateQuery {
  @IsDate()
  @Type(() => Date)
  @ApiProperty({
    description: "날짜",
    type: Date,
  })
  createdAt!: Date;
}
