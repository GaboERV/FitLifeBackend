"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserCase = void 0;
const UserMapper_1 = require("../../mappers/UserMapper");
class GetUserCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userId) {
        const user = await this.userRepository.getUserById(userId);
        if (!user)
            throw new Error('Usuario no encontrado');
        return UserMapper_1.UserMapper.toDTO(user);
    }
}
exports.GetUserCase = GetUserCase;
//# sourceMappingURL=GetUserCase.js.map