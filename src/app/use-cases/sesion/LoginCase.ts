import { UserRepository } from "../../../dominio/repositories/UserRepository";
import { EncryptService } from "../../../dominio/services/EncryptService";
import { TokenService } from "../../../dominio/services/TokenService";
import { UserMapper } from "../../mappers/UserMapper";

export class LoginCase {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly encryptService: EncryptService,
        private readonly tokenService: TokenService,
    ) { }

    async execute(correo: string, contrasena: string) {
        const userExist = await this.userRepository.getByEmail(correo)
        if (!userExist) throw new Error('Usuario no existente');

        const isValidContrasena: boolean = await this.encryptService.compare(contrasena, userExist.contrasena)

        if (!isValidContrasena) throw new Error('Contraseña invalida')

        const UserDTO = UserMapper.toDTO(userExist)

        const payload = await this.tokenService.generarToken(UserDTO)

        return {
            token: payload,
            User: UserDTO
        }


    }
}