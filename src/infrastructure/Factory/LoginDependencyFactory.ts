import { UserRepository } from "../../dominio/repositories/UserRepository";
import { EncryptService } from "../../dominio/services/EncryptService";
import { TokenService } from "../../dominio/services/TokenService";
import { LoginCase } from "../../app/use-cases/sesion/LoginCase";
import { encryptServiceSingleton, tokenServiceSingleton, userRepositorySingleton } from "./Dependency";
export class LoginDependencyFactory {
    private static instance: LoginDependencyFactory

    private constructor(
        private readonly userRepository: UserRepository,
        private readonly encryptService: EncryptService,
        private readonly tokenService: TokenService,
    ) { }

    static getInstance():LoginDependencyFactory{
        if(!LoginDependencyFactory.instance){
            LoginDependencyFactory.instance = new LoginDependencyFactory(
               userRepositorySingleton,
               encryptServiceSingleton,
               tokenServiceSingleton
            )
        }
        return LoginDependencyFactory.instance
    }

    loginCase(): LoginCase{
        return new LoginCase(this.userRepository,this.encryptService,this.tokenService)
    }
}