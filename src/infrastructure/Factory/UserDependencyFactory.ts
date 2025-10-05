import { UserRepository } from "../../dominio/repositories/UserRepository";
import { CorreoValidatorService } from "../../dominio/services/CorreoValidatorService";
import { EncryptService } from "../../dominio/services/EncryptService";
import { CreateUserCase } from "../../app/use-cases/User/CreateUserCase";
import { DeleteUserCase } from "../../app/use-cases/User/DeleteUserCase";
import { GetUserCase } from "../../app/use-cases/User/GetUserCase";
import { UpdateUserCase } from "../../app/use-cases/User/UpdateUserCase";
import { emailValidatorSingleton, encryptServiceSingleton, userRepositorySingleton } from "./Dependency";

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
                userRepositorySingleton,
                encryptServiceSingleton,
                emailValidatorSingleton
            );
        }
        return UserDependencyFactory.instance;
    }
    getUserUseCase():GetUserCase{
        return new GetUserCase(this.userRepository)
    }
    
    createUserUseCase(): CreateUserCase {
        return new CreateUserCase(this.emailValidator, this.userRepository, this.encryptService);
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