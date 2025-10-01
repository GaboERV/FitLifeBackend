import { Pool } from "mysql2/promise";
import { User } from "../../dominio/entities/User";
import { UserRepository } from "../../dominio/repositories/UserRepository";


export class UserRepositoryMySQL implements UserRepository {
    constructor(
        private readonly pool: Pool
    ) { }

    async getUserById(id: number): Promise<User | null> {
        const [rows] = await this.pool.query('SELECT * FROM user WHERE id = ?', [id]);
        console.log('User rows:', rows);
        
        if (Array.isArray(rows) && rows.length > 0) {
            const userData = rows[0] as any;
            return new User(
                userData.nombre,
                userData.contrasena,
                userData.correo,
                userData.pesoKg,
                userData.edad,
                userData.esturaMetros,
                userData.id
            );
        }

        return null;
    }

    async getByEmail(email: string): Promise<User | null> {
        const [rows] = await this.pool.query('SELECT * FROM user WHERE correo = ?', [email]);
        
        if (Array.isArray(rows) && rows.length > 0) {
            const userData = rows[0] as any;
            return new User(
                userData.nombre,
                userData.contrasena,
                userData.correo,
                userData.pesoKg,
                userData.edad,
                userData.esturaMetros,
                userData.id
            );
        }

        return null;
    }

    async saveUser(user: User): Promise<void> {
        if (user.id == 0) {
            // Update existing user
            await this.pool.query(
                'UPDATE user SET nombre = ?, contrasena = ?, correo = ?, pesoKg = ?, edad = ?, esturaMetros = ? WHERE id = ?',
                [user.nombre, user.contrasena, user.correo, user.pesoKg, user.edad, user.estaturaMetros, user.id]
            );
        } else {
            // Insert new user
            const [result] = await this.pool.query(
                'INSERT INTO user (nombre, contrasena, correo, pesoKg, edad, esturaMetros) VALUES (?, ?, ?, ?, ?, ?)',
                [user.nombre, user.contrasena, user.correo, user.pesoKg, user.edad, user.estaturaMetros]
            ) as any;
            
            user.id = result.insertId;
        }
    }

    async deleteUser(id: number): Promise<void> {
        await this.pool.query('DELETE FROM user WHERE id = ?', [id]);
    }
}