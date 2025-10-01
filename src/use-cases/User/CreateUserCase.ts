import { User } from "../../dominio/entities/User";
import { UserRepository } from "../../dominio/repositories/UserRepository";
import { CorreoValidatorService } from "../../dominio/services/CorreoValidatorService";
import { EncryptService } from "../../dominio/services/EncryptService";
import { CreateUserDto } from "../../dto/user/CreateUser.dto";

export class CreateUserCase {
    constructor(
        private correoValidatorService: CorreoValidatorService,
        private userRepository: UserRepository,
        private encryptService: EncryptService
    ) { }

    async execute(createUserDto: CreateUserDto): Promise<void> {
        const { nombre, contrasena, correo, pesoKg, edad, estaturaMetros } = createUserDto
        if (!this.correoValidatorService.validarCorreo(correo)) {
            throw new Error("Correo no valido");
        }
        const correoExist = await this.userRepository.getByEmail(correo);
        if (correoExist) {
            throw new Error("Correo ya registrado");
        }
        const encryptContrasena = await this.encryptService.encrypt(contrasena)

        const user = new User(nombre, encryptContrasena, correo, pesoKg, edad, estaturaMetros,0);
        this.userRepository.saveUser(user);
    }

}