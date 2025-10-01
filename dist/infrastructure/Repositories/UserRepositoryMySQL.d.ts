import { Pool } from "mysql2/promise";
import { User } from "../../dominio/entities/User";
import { UserRepository } from "../../dominio/repositories/UserRepository";
export declare class UserRepositoryMySQL implements UserRepository {
    private readonly pool;
    constructor(pool: Pool);
    getUserById(id: number): Promise<User | null>;
    getByEmail(email: string): Promise<User | null>;
    saveUser(user: User): Promise<void>;
    deleteUser(id: number): Promise<void>;
}
