import { TokenService } from '../../dominio/services/TokenService';
export declare class JwtTokenService implements TokenService {
    private readonly secretKey;
    private readonly expiresIn;
    constructor(secretKey?: string, expiresIn?: string);
    generarToken(payload: object): string;
    verificarToken(token: string): boolean;
}
