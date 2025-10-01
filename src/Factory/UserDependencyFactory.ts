import { UserRepository } from "../dominio/repositories/UserRepository";
import { CorreoValidatorService } from "../dominio/services/CorreoValidatorService";
import { EncryptService } from "../dominio/services/EncryptService";
import pool from "../infrastructure/Repositories/connection";
import { UserRepositoryMySQL } from "../infrastructure/Repositories/UserRepositoryMySQL";
import { BcryptEncryptService } from "../infrastructure/Services/BycryptService";
import { CorreoValidatorServiceManual } from "../infrastructure/Services/CorreoValidatorServiceManual";
import { CreateUserCase } from "../use-cases/User/CreateUserCase";
import { DeleteUserCase } from "../use-cases/User/DeleteUserCase";
import { GetUserCase } from "../use-cases/User/GetUserCase";
import { UpdateUserCase } from "../use-cases/User/UpdateUserCase";

export class UserDependencyFactory {
    private static instance: UserDependencyFactory;
    
    private constructor(
        public readonly userRepository: UserRepository,
        public readonly encryptService: EncryptService,
        public readonly emailValidator: CorreoValidatorService
    ) {}
    
    static getInstance(): UserDependencyFactory {
        if (!UserDependencyFactory.instance) {
            UserDependencyFactory.instance = new UserDependencyFactory(
                new UserRepositoryMySQL(pool),
                new BcryptEncryptService(10),
                new CorreoValidatorServiceManual()
            );
        }
        return UserDependencyFactory.instance;
    }
    getUserUseCase():GetUserCase{
        return new GetUserCase(this.userRepository)
    }
    
    createUserUseCase(): CreateUserCase {
        return new CreateUserCase(this.emailValidator, this.userRepository);
    }
    
    deleteUserUseCase(): DeleteUserCase {
        return new DeleteUserCase(this.encryptService, this.userRepository);
    }
    
    updateUserUseCase(): UpdateUserCase {
        return new UpdateUserCase(
            this.userRepository,
            this.emailValidator,
            this.encryptService
        );
    }
}