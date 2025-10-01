import { UserRepository } from "../dominio/repositories/UserRepository";
import { EncryptService } from "../dominio/services/EncryptService";
import { TokenService } from "../dominio/services/TokenService";
import pool from "../infrastructure/Repositories/connection";
import { UserRepositoryMySQL } from "../infrastructure/Repositories/UserRepositoryMySQL";
import { BcryptEncryptService } from "../infrastructure/Services/BycryptService";
import { JwtTokenService } from "../infrastructure/Services/JsonWebTokenService";
import { LoginCase } from "../use-cases/sesion/LoginCase";

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
                new UserRepositoryMySQL(pool),
                new BcryptEncryptService(10),
                new JwtTokenService()
            )
        }
        return LoginDependencyFactory.instance
    }

    loginCase(): LoginCase{
        return new LoginCase(this.userRepository,this.encryptService,this.tokenService)
    }
}