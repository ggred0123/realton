import { UserRepository } from "./user.repository";
import { UserBaseInfo } from "../auth/type/user-base-info.type";
import { UserDto } from "./dto/user.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUser(user: UserBaseInfo): Promise<UserDto>;
}
