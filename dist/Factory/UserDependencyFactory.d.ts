import { UserRepository } from "../dominio/repositories/UserRepository";
import { CorreoValidatorService } from "../dominio/services/CorreoValidatorService";
import { EncryptService } from "../dominio/services/EncryptService";
import { CreateUserCase } from "../use-cases/User/CreateUserCase";
import { DeleteUserCase } from "../use-cases/User/DeleteUserCase";
import { GetUserCase } from "../use-cases/User/GetUserCase";
import { UpdateUserCase } from "../use-cases/User/UpdateUserCase";
export declare class UserDependencyFactory {
    readonly userRepository: UserRepository;
    readonly encryptService: EncryptService;
    readonly emailValidator: CorreoValidatorService;
    private static instance;
    private constructor();
    static getInstance(): UserDependencyFactory;
    getUserUseCase(): GetUserCase;
    createUserUseCase(): CreateUserCase;
    deleteUserUseCase(): DeleteUserCase;
    updateUserUseCase(): UpdateUserCase;
}
