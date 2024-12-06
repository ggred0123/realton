import { UserData } from '../type/user-data.type';
export declare class UserDto {
    id: number;
    email: string;
    name: string;
    totalExp: number;
    static from(data: UserData): UserDto;
}
