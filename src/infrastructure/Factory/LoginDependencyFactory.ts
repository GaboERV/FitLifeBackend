import { UserRepository } from "../../dominio/repositories/UserRepository";
import { EncryptService } from "../../dominio/services/EncryptService";
import { TokenService } from "../../dominio/services/TokenService";
import {  UserRepositoryORMPrisma } from "../Repositories/UserRepositoryORMPrisma";
import { BcryptEncryptService } from "../Services/BycryptService";
import { JwtTokenService } from "../Services/JsonWebTokenService";
import { LoginCase } from "../../use-cases/sesion/LoginCase";
import prisma from "../Prisma/Prisma";
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
                new UserRepositoryORMPrisma(prisma),
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