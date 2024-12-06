import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { UserBaseInfo } from "../auth/type/user-base-info.type";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(user: UserBaseInfo): Promise<UserDto>;
}
