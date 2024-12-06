import { ApiProperty } from '@nestjs/swagger';
import { EventData } from '../type/Reports-data.type';

export class SimpleUserDto {
  @ApiProperty({
    description: '리포트 ID',
    type: Number,
  })
  id!: number;

  @ApiProperty({
    description: '유저 ID',
    type: Number,
  })
  user_id!: number;

  @ApiProperty({
    description: '답변 ID',
    type: Number,
  })
  answer_id!: number;

  @ApiProperty({
    description: 'AI 피드백',
    type: String,
  })
  ai_feedback!: string;

  @ApiProperty({
    description: '리포트 생성일',
    type: Date,
  })
  createdAt!: Date;


  static from(data: any): SimpleUserDto {
    return {
      id: data.id,
      user_id: data.userId,
      answer_id: data.answersId,
      ai_feedback: data.aiFeedBack, 
      createdAt: data.createdAt,
    };
  }
}