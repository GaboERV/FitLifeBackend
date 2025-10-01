"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserCase = void 0;
class UpdateUserCase {
    constructor(userRepository, correoValidatorService, encryptService) {
        this.userRepository = userRepository;
        this.correoValidatorService = correoValidatorService;
        this.encryptService = encryptService;
    }
    async execute(updateUserDto) {
        const { id, nombre, contrasena, correo, pesoKg, edad, estaturaMetros } = updateUserDto;
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            throw new Error("Usuario no encontrado");
        }
        if (correo) {
            if (!this.correoValidatorService.validarCorreo(correo)) {
                throw new Error("Correo no valido");
            }
            const correoExist = await this.userRepository.getByEmail(correo);
            if (correoExist && correoExist.id !== id) {
                throw new Error("Correo ya registrado");
            }
            user.correo = correo;
        }
        if (contrasena) {
            user.contrasena = await this.encryptService.encrypt(contrasena);
        }
        if (nombre)
            user.nombre = nombre;
        if (pesoKg)
            user.pesoKg = pesoKg;
        if (edad)
            user.edad = edad;
        if (estaturaMetros)
            user.estaturaMetros = estaturaMetros;
        this.userRepository.saveUser(user);
    }
}
exports.UpdateUserCase = UpdateUserCase;
//# sourceMappingURL=UpdateUserCase.js.map