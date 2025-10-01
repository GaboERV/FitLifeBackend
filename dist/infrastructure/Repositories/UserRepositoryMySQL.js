"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryMySQL = void 0;
const User_1 = require("../../dominio/entities/User");
class UserRepositoryMySQL {
    constructor(pool) {
        this.pool = pool;
    }
    async getUserById(id) {
        const [rows] = await this.pool.query('SELECT * FROM user WHERE id = ?', [id]);
        console.log('User rows:', rows);
        if (Array.isArray(rows) && rows.length > 0) {
            const userData = rows[0];
            return new User_1.User(userData.nombre, userData.contrasena, userData.correo, userData.pesoKg, userData.edad, userData.esturaMetros, userData.id);
        }
        return null;
    }
    async getByEmail(email) {
        const [rows] = await this.pool.query('SELECT * FROM user WHERE correo = ?', [email]);
        if (Array.isArray(rows) && rows.length > 0) {
            const userData = rows[0];
            return new User_1.User(userData.nombre, userData.contrasena, userData.correo, userData.pesoKg, userData.edad, userData.esturaMetros, userData.id);
        }
        return null;
    }
    async saveUser(user) {
        if (user.id === 0) {
            // Insert new user
            const [result] = await this.pool.query('INSERT INTO user (nombre, contrasena, correo, pesoKg, edad, esturaMetros) VALUES (?, ?, ?, ?, ?, ?)', [user.nombre, user.contrasena, user.correo, user.pesoKg, user.edad, user.estaturaMetros]);
            user.id = result.insertId;
        }
        else {
            // Update existing user
            await this.pool.query('UPDATE user SET nombre = ?, contrasena = ?, correo = ?, pesoKg = ?, edad = ?, esturaMetros = ? WHERE id = ?', [user.nombre, user.contrasena, user.correo, user.pesoKg, user.edad, user.estaturaMetros, user.id]);
        }
    }
    async deleteUser(id) {
        await this.pool.query('DELETE FROM user WHERE id = ?', [id]);
    }
}
exports.UserRepositoryMySQL = UserRepositoryMySQL;
//# sourceMappingURL=UserRepositoryMySQL.js.map