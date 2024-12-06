import { PrismaService } from '../common/services/prisma.service';
import { Category, User } from '@prisma/client';
import { UpdateUserData } from '../auth/type/update-user-data.type';
export declare class UserRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUserById(userId: number): Promise<User | null>;
    updateUser(userId: number, data: UpdateUserData): Promise<User>;
    isEmailExist(email: string): Promise<boolean>;
    getCategoryById(id: number): Promise<Category | null>;
    getCityById(id: number): Promise<Category | null>;
    deleteUser(userId: number): Promise<void>;
}
