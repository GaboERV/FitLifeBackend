export interface TokenService {
    generarToken(payload: object): string;
    verificarToken(token: string): boolean ;
}