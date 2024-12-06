import { UserRepository } from './user.repository';
import { UserDto } from './dto/user.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUserById(userId: number): Promise<UserDto>;
}
