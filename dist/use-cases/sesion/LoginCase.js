"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginCase = void 0;
const UserMapper_1 = require("../../mappers/UserMapper");
class LoginCase {
    constructor(userRepository, encryptService, tokenService) {
        this.userRepository = userRepository;
        this.encryptService = encryptService;
        this.tokenService = tokenService;
    }
    async execute(correo, contrasena) {
        const userExist = await this.userRepository.getByEmail(correo);
        if (!userExist)
            throw new Error('Usuario no existente');
        const isValidContrasena = await this.encryptService.compare(contrasena, userExist.contrasena);
        if (!isValidContrasena)
            throw new Error('Contraseña invalida');
        const UserDTO = UserMapper_1.UserMapper.toDTO(userExist);
        const payload = await this.tokenService.generarToken(UserDTO);
        return {
            token: payload,
            User: UserDTO
        };
    }
}
exports.LoginCase = LoginCase;
//# sourceMappingURL=LoginCase.js.map