"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserCase = void 0;
class DeleteUserCase {
    constructor(encryptService, userRepository) {
        this.encryptService = encryptService;
        this.userRepository = userRepository;
    }
    async execute(deleteUserDto) {
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
exports.DeleteUserCase = DeleteUserCase;
//# sourceMappingURL=DeleteUserCase.js.map