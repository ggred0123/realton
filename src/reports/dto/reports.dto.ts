import { ApiProperty } from "@nestjs/swagger";
import { ReportsData } from "../type/reports.data.type";

export class ReportsDto {
  @ApiProperty({
    description: "리포트 ID",
    type: Number,
  })
  id!: number;

  @ApiProperty({
    description: "유저 ID",
    type: Number,
  })
  userId!: number;

  @ApiProperty({
    description: "답변 ID",
    type: Number,
  })
  answersId!: number;

  @ApiProperty({
    description: "AI 피드백",
    type: String,
  })
  aiFeedBack!: string;

  @ApiProperty({
    description: "리포트 생성일",
    type: Date,
  })
  createdAt!: Date;

  static from(data: ReportsData): ReportsDto {
    return {
      id: data.id,
      userId: data.userId,
      answersId: data.answersId,
      aiFeedBack: data.aiFeedBack,
      createdAt: data.createdAt,
    };
  }
}
