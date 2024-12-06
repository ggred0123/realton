import { UserData } from '../type/user-data.type';
export declare class UserDto {
    id: number;
    email: string;
    name: string;
    birthday: Date | null;
    cityId: number | null;
    categoryId: number;
    static from(data: UserData): UserDto;
}
