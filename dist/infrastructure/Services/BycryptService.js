"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptEncryptService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class BcryptEncryptService {
    constructor(saltRounds = 10) {
        this.saltRounds = saltRounds;
    }
    async encrypt(data) {
        try {
            const hash = await bcrypt_1.default.hash(data, this.saltRounds);
            return hash;
        }
        catch (error) {
            console.error('Error al encriptar:', error);
            throw new Error('Error al encriptar los datos');
        }
    }
    async compare(data, encrypted) {
        try {
            const isMatch = await bcrypt_1.default.compare(data, encrypted);
            return isMatch;
        }
        catch (error) {
            console.error('Error al comparar:', error);
            throw new Error('Error al comparar los datos');
        }
    }
}
exports.BcryptEncryptService = BcryptEncryptService;
//# sourceMappingURL=BycryptService.js.map