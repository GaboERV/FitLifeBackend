import { UserRepository } from "../../dominio/repositories/UserRepository";
import { UserResponseDTO } from "../../dto/user/UserReponse.dto";
export declare class GetUserCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(userId: number): Promise<UserResponseDTO>;
}
