import bcrypt from 'bcrypt';
import { EncryptService } from '../../dominio/services/EncryptService';

export class BcryptEncryptService implements EncryptService {
    private readonly saltRounds: number;

    constructor(saltRounds: number = 10) {
        this.saltRounds = saltRounds;
    }

    async encrypt(data: string): Promise<string> {
        try {
            const hash = await bcrypt.hash(data, this.saltRounds);
            return hash;
        } catch (error) {
            console.error('Error al encriptar:', error);
            throw new Error('Error al encriptar los datos');
        }
    }

    async compare(data: string, encrypted: string): Promise<boolean> {
        try {
            const isMatch = await bcrypt.compare(data, encrypted);
            return isMatch;
        } catch (error) {
            console.error('Error al comparar:', error);
            throw new Error('Error al comparar los datos');
        }
    }
}