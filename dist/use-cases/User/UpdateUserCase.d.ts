import { UserRepository } from "../../dominio/repositories/UserRepository";
import { CorreoValidatorService } from "../../dominio/services/CorreoValidatorService";
import { EncryptService } from "../../dominio/services/EncryptService";
import { UpdateUserDto } from "../../dto/user/UpdateUser.dto";
export declare class UpdateUserCase {
    private userRepository;
    private correoValidatorService;
    private encryptService;
    constructor(userRepository: UserRepository, correoValidatorService: CorreoValidatorService, encryptService: EncryptService);
    execute(updateUserDto: UpdateUserDto): Promise<void>;
}
