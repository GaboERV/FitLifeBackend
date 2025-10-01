"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtTokenService {
    constructor(secretKey, expiresIn = '24h') {
        // Usa una clave secreta del entorno o una por defecto (CAMBIAR EN PRODUCCIÓN)
        this.secretKey = secretKey || process.env.JWT_SECRET || 'tu-clave-super-secreta-cambiar-en-produccion';
        this.expiresIn = expiresIn;
    }
    generarToken(payload) {
        try {
            // Genera el token JWT
            const token = jsonwebtoken_1.default.sign(payload, this.secretKey, {
                expiresIn: this.expiresIn,
                issuer: 'tu-aplicacion',
                algorithm: 'HS256'
            });
            return token;
        }
        catch (error) {
            console.error('Error al generar token:', error);
            throw new Error('Error al generar el token de autenticación');
        }
    }
    verificarToken(token) {
        try {
            // Verifica y decodifica el token
            jsonwebtoken_1.default.verify(token, this.secretKey);
            return true;
        }
        catch (error) {
            // Token inválido, expirado o manipulado
            if (error instanceof jsonwebtoken_1.default.TokenExpiredError) {
                console.error('Token expirado');
            }
            else if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
                console.error('Token inválido:', error.message);
            }
            else {
                console.error('Error al verificar token:', error);
            }
            return false;
        }
    }
}
exports.JwtTokenService = JwtTokenService;
//# sourceMappingURL=JsonWebTokenService.js.map