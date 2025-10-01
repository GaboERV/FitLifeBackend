import { UserRepository } from "../../dominio/repositories/UserRepository";
import { EncryptService } from "../../dominio/services/EncryptService";
import { DeleteUserDto } from "../../dto/user/DeleteUser.dto";
export declare class DeleteUserCase {
    private readonly encryptService;
    private readonly userRepository;
    constructor(encryptService: EncryptService, userRepository: UserRepository);
    execute(deleteUserDto: DeleteUserDto): Promise<void>;
}
