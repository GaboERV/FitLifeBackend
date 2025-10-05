import { UserRepository } from "../../../dominio/repositories/UserRepository";
import { EncryptService } from "../../../dominio/services/EncryptService";
import { DeleteUserDto } from "../../dto/user/DeleteUser.dto";

export class DeleteUserCase{
    constructor(
        private readonly encryptService: EncryptService,
        private readonly userRepository: UserRepository
    ) { }
    async execute(deleteUserDto:DeleteUserDto): Promise<void> {
        const { id, contrasena } = deleteUserDto;
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        const isMatch = await this.encryptService.compare(contrasena, user.contrasena);
        if (!isMatch) {
            throw new Error("Contraseña incorrecta");
        }
        await this.userRepository.deleteUser(id);
    }
}