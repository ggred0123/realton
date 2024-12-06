import { Injectable } from "@nestjs/common";
import { PrismaService } from "../common/services/prisma.service";
import { CreateAnswersData } from "./type/create-answers-data.type";
import { AnswersData } from "./type/answers-data.type";
import { User } from "@prisma/client";
import { DateQuery } from "./query/date.query";

@Injectable()
export class AnswersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createAnswer(data: CreateAnswersData): Promise<AnswersData> {
    return await this.prisma.answers.create({
      data: {
        userId: data.userId,
        replies: data.replies,
      },
      select: {
        id: true,
        userId: true,
        replies: true,
        createdAt: true,
      },
    });
  }

  async getAnswersByDate(query: DateQuery): Promise<AnswersData | null> {
    return this.prisma.answers.findFirst({
      where: {
        createdAt: query.createdAt,
      },
    });
  }
}
