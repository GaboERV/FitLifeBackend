import { UserRepository } from "../../dominio/repositories/UserRepository";
import { EncryptService } from "../../dominio/services/EncryptService";
import { TokenService } from "../../dominio/services/TokenService";
export declare class LoginCase {
    private readonly userRepository;
    private readonly encryptService;
    private readonly tokenService;
    constructor(userRepository: UserRepository, encryptService: EncryptService, tokenService: TokenService);
    execute(correo: string, contrasena: string): Promise<{
        token: string;
        User: import("../../dto/user/UserReponse.dto").UserResponseDTO;
    }>;
}
