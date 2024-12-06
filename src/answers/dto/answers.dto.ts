import { ApiProperty } from "@nestjs/swagger";
import { AnswersData } from "../type/answers-data.type";

export class AnswersDto {
  @ApiProperty({
    description: "응답 id",
    type: Number,
  })
  id!: number;
  @ApiProperty({
    description: "유저 id",
    type: Number,
  })
  userId!: number;

  @ApiProperty({
    description: "유저 응답들",
    type: [String],
  })
  replies!: string[];

  @ApiProperty({
    description: "생성일",
    type: Date,
  })
  createdAt!: Date;

  static from(data: AnswersData): AnswersDto {
    return {
      id: data.id,
      userId: data.userId,
      replies: data.replies,
      createdAt: data.createdAt,
    };
  }

  static fromArray(answers: AnswersData[]): AnswersDto[] {
    return answers.map((answer) => this.from(answer));
  }
}
export class AnswersListDto {
  @ApiProperty({
    description: "리뷰 목록",
    type: [AnswersDto],
  })
  answers!: AnswersDto[];

  static from(answers: AnswersData[]): AnswersListDto {
    return {
      answers: AnswersDto.fromArray(answers),
    };
  }
}
