import { UserRepository } from "../../dominio/repositories/UserRepository";
import { CorreoValidatorService } from "../../dominio/services/CorreoValidatorService";
import { CreateUserDto } from "../../dto/user/CreateUser.dto";
export declare class CreateUserCase {
    private correoValidatorService;
    private userRepository;
    constructor(correoValidatorService: CorreoValidatorService, userRepository: UserRepository);
    execute(createUserDto: CreateUserDto): Promise<void>;
}
