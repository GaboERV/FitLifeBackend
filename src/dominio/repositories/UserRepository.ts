import { User } from "../entities/User";

export interface UserRepository {
    getUserById(id: number): Promise<User | null>;
    getByEmail(email: string): Promise<User | null>;
    saveUser(user: User): Promise<void>;
    deleteUser(id: number): Promise<void>;
}