import { EjercicioInformativo } from "../../dominio/entities/EjercicioInformativo";
import { EjercicioRepository } from "../../dominio/repositories/EjercicioRepository";
import { PrismaClient, Prisma } from "../../generated/prisma";


export class EjercicioRepositoryORM implements EjercicioRepository {
    constructor(
        private readonly prisma: PrismaClient
    ) { }

    async getAllEjercicios(): Promise<EjercicioInformativo[] | null> {
        try {
            const ejercicios = await this.prisma.ejercicios.findMany({
                where: {}
            })
            if (!ejercicios) return null

            const ejercicioInformativo = ejercicios.map(e => new EjercicioInformativo(
                Number(e.id),
                e.nombre,
                e.MET.toNumber()
            ))

            return ejercicioInformativo

        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                throw new Error('falla por pendejo')
            }
            return null;
        }
    }


}