import { PrismaService } from "../common/services/prisma.service";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { UpdateUserData } from "../auth/type/update-user-data.type";
import { UserData } from "./type/user-data.type";

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getUserById(userId: number): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
  }

  async isEmailExist(email: string): Promise<boolean> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    return !!user;
  }
}
