import { Pool } from "mysql2/promise";
import { User } from "../../dominio/entities/User";
import { UserRepository } from "../../dominio/repositories/UserRepository";
import { PrismaClient } from "../../generated/prisma";
import prisma from "../Prisma/Prisma";


export class UserRepositoryORMPrisma implements UserRepository {
    constructor(
        private readonly prisma: PrismaClient
    ) { }
    async getUserById(id: number): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: { id }
        });

        return this.mapToUser(user);
    }

    async getByEmail(correo: string): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: { correo }
        });

        return this.mapToUser(user);
    }

    // Método privado reutilizable
    private mapToUser(user: any): User | null {
        if (!user) return null;

        return new User(
            user.nombre,
            user.contrasena,
            user.correo,
            user.pesoKg.toNumber(),
            user.edad,
            user.esturaMetros.toNumber()
        );
    }

    async saveUser(user: User): Promise<void> {
        if (user.id === 0) {

            await this.prisma.user.create({
                data: {
                    nombre: user.nombre,
                    contrasena: user.contrasena,
                    correo: user.correo,
                    pesoKg: user.pesoKg,
                    edad: user.edad,
                    esturaMetros: user.estaturaMetros
                }
            })

        } else {
            await this.prisma.user.update({
                data: {
                    nombre: user.nombre,
                    contrasena: user.contrasena,
                    correo: user.correo,
                    pesoKg: user.pesoKg,
                    edad: user.edad,
                    esturaMetros: user.estaturaMetros
                },
                where: { id: user.id }
            })
        }
    }

    async deleteUser(id: number): Promise<void> {
        const deleteUser = await this.prisma.user.delete({
            where: { id }
        })
        
    }
}

