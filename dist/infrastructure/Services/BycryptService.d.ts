import { EncryptService } from '../../dominio/services/EncryptService';
export declare class BcryptEncryptService implements EncryptService {
    private readonly saltRounds;
    constructor(saltRounds?: number);
    encrypt(data: string): Promise<string>;
    compare(data: string, encrypted: string): Promise<boolean>;
}
