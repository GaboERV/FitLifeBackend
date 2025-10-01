"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static toDTO(user) {
        const UserDTO = {
            id: user.id ?? 0,
            nombre: user.nombre,
            edad: user.edad,
            correo: user.correo,
            pesoKg: user.pesoKg,
            estaturaMetros: user.estaturaMetros
        };
        return UserDTO;
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=UserMapper.js.map