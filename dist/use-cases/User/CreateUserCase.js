"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserCase = void 0;
const User_1 = require("../../dominio/entities/User");
class CreateUserCase {
    constructor(correoValidatorService, userRepository) {
        this.correoValidatorService = correoValidatorService;
        this.userRepository = userRepository;
    }
    async execute(createUserDto) {
        const { nombre, contrasena, correo, pesoKg, edad, estaturaMetros } = createUserDto;
        if (!this.correoValidatorService.validarCorreo(correo)) {
            throw new Error("Correo no valido");
        }
        const correoExist = await this.userRepository.getByEmail(correo);
        if (correoExist) {
            throw new Error("Correo ya registrado");
        }
        const user = new User_1.User(nombre, contrasena, correo, pesoKg, edad, estaturaMetros, 0);
        this.userRepository.saveUser(user);
    }
}
exports.CreateUserCase = CreateUserCase;
//# sourceMappingURL=CreateUserCase.js.map