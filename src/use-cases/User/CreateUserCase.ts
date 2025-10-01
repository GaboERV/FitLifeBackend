import { User } from "../../dominio/entities/User";
import { UserRepository } from "../../dominio/repositories/UserRepository";
import { CorreoValidatorService } from "../../dominio/services/CorreoValidatorService";
import { CreateUserDto } from "../../dto/user/CreateUser.dto";

export class CreateUserCase {
    constructor(
        private correoValidatorService: CorreoValidatorService,
        private userRepository: UserRepository,
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

        const user = new User(nombre, contrasena, correo, pesoKg, edad, estaturaMetros,0);
        this.userRepository.saveUser(user);
    }

}