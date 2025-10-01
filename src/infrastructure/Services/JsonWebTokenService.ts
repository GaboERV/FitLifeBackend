import jwt, { Secret } from 'jsonwebtoken';
import { TokenService } from '../../dominio/services/TokenService';

export class JwtTokenService implements TokenService {
    private readonly secretKey: Secret;
    private readonly expiresIn: string;

    constructor(secretKey?: string, expiresIn: string = '24h') {
        // Usa una clave secreta del entorno o una por defecto (CAMBIAR EN PRODUCCIÓN)
        this.secretKey = secretKey || process.env.JWT_SECRET || 'tu-clave-super-secreta-cambiar-en-produccion';
        this.expiresIn = expiresIn;
    }
    generarToken(payload: object): string {
        try {
            // Genera el token JWT
            const token = jwt.sign(
                payload,
                this.secretKey,
                {
                    expiresIn: this.expiresIn,
                    issuer: 'tu-aplicacion',
                    algorithm: 'HS256'
                } as jwt.SignOptions
            );

            return token;
        } catch (error) {
            console.error('Error al generar token:', error);
            throw new Error('Error al generar el token de autenticación');
        }
    }

    verificarToken(token: string): boolean {
        try {
            // Verifica y decodifica el token
            jwt.verify(token, this.secretKey);
            return true;
        } catch (error) {
            // Token inválido, expirado o manipulado
            if (error instanceof jwt.TokenExpiredError) {
                console.error('Token expirado');
            } else if (error instanceof jwt.JsonWebTokenError) {
                console.error('Token inválido:', error.message);
            } else {
                console.error('Error al verificar token:', error);
            }
            return false;
        }
    }
}