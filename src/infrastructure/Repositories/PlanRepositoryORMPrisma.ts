import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { PlanEjercicio } from "../../dominio/entities/PlanEjercicio";
import { PlanEjercicioSimple } from "../../dominio/entities/PlanEjercioSimple";
import { DiaPlanEjercicio } from "../../dominio/entities/DiaPlanEjercicio";
import { EjercicioAsignado } from "../../dominio/entities/EjercicioAsignado";
import { PrismaClient, Prisma } from "../../generated/prisma";
import prisma from "../Prisma/Prisma";

export class PlanRepositoryORMPrisma implements PlanRepository {
    constructor(
        private readonly prisma: PrismaClient
    ) { }

    async getPlanById(id: number): Promise<PlanEjercicio | null> {
        const plan = await this.prisma.plan.findUnique({
            where: { id },
            include: {
                diasPlan: {
                    include: {
                        DiaEjercicioAsignado: {
                            include: {
                                EjercicioAsignadoPlan: {
                                    include: {
                                        ejercicios: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });

        console.log(JSON.stringify(plan, null, 2));

        if (!plan) return null;

        if (plan.diasPlan.length === 0) {
            return new PlanEjercicio(
                plan.nombre,
                plan.descripcion,
                plan.userId,
                plan.id,
                []
            );
        }

        const diasPlan = plan.diasPlan.map(dia => {
            const ejercicios = dia.DiaEjercicioAsignado.map(dea =>
                new EjercicioAsignado(
                    dea.EjercicioAsignadoPlan.id,
                    dea.EjercicioAsignadoPlan.ejercicios.nombre,
                    dea.EjercicioAsignadoPlan.ejercicios.MET.toNumber(),
                    dea.completado,
                    dea.EjercicioAsignadoPlan.duracion.toNumber()
                )
            );

            return new DiaPlanEjercicio(dia.id, dia.fecha, ejercicios);
        });

        const planEjercicio = new PlanEjercicio(
            plan.nombre,
            plan.descripcion,
            plan.userId,
            plan.id,
            diasPlan
        );

        console.log(JSON.stringify(planEjercicio, null, 2));
        return planEjercicio;
    }

    async getPlanSimpleById(id: number): Promise<PlanEjercicioSimple | null> {
        const plan = await this.prisma.plan.findUnique({
            where: { id }
        });

        if (!plan) return null;

        return new PlanEjercicioSimple(
            plan.nombre,
            plan.descripcion,
            plan.userId,
            plan.id
        );
    }

    async getPlanByUserId(userId: number): Promise<PlanEjercicioSimple[] | null> {
        const planes = await this.prisma.plan.findMany({
            where: { userId }
        });

        if (planes.length === 0) return null;

        return planes.map(plan =>
            new PlanEjercicioSimple(
                plan.nombre,
                plan.descripcion,
                plan.userId,
                plan.id
            )
        );
    }

    async savePlan(plan: PlanEjercicioSimple): Promise<void> {
        try {
            if (plan.id) {
                await this.prisma.plan.update({
                    where: { id: plan.id },
                    data: {
                        nombre: plan.nombre,
                        descripcion: plan.descripcion,
                        userId: plan.userId
                    }
                });
            } else {
                await this.prisma.plan.create({
                    data: {
                        nombre: plan.nombre,
                        descripcion: plan.descripcion,
                        userId: plan.userId
                    }
                });
            }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new Error(`Plan con ID ${plan.id} no encontrado`);
                }
            }
            throw new Error('Falla en base de datos al guardar el plan');
        }
    }

    async deletePlan(id: number): Promise<void> {
        try {
            await this.prisma.plan.delete({
                where: { id }
            });
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new Error(`Plan con ID ${id} no encontrado`);
                }
            }
            throw new Error('Falla en base de datos al eliminar el plan');
        }
    }

    // ===== FUNCIONES DE DÍA PLAN =====

    async getDiaPlanById(id: number): Promise<DiaPlanEjercicio | null> {
        const dia = await this.prisma.diasPlan.findUnique({
            where: { id },
            include: {
                DiaEjercicioAsignado: {
                    include: {
                        EjercicioAsignadoPlan: {
                            include: {
                                ejercicios: true
                            }
                        }
                    }
                }
            }
        });

        if (!dia) return null;

        const ejercicios = dia.DiaEjercicioAsignado.map(dea =>
            new EjercicioAsignado(
                dea.EjercicioAsignadoPlan.id,
                dea.EjercicioAsignadoPlan.ejercicios.nombre,
                dea.EjercicioAsignadoPlan.ejercicios.MET.toNumber(),
                dea.completado,
                dea.EjercicioAsignadoPlan.duracion.toNumber()
            )
        );

        return new DiaPlanEjercicio(dia.id, dia.fecha, ejercicios);
    }

    async getDiaPlanByPlanId(planId: number): Promise<DiaPlanEjercicio[]> {
        const dias = await this.prisma.diasPlan.findMany({
            where: { planId },
            include: {
                DiaEjercicioAsignado: {
                    include: {
                        EjercicioAsignadoPlan: {
                            include: {
                                ejercicios: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                fecha: 'asc'
            }
        });

        return dias.map(dia => {
            const ejercicios = dia.DiaEjercicioAsignado.map(dea =>
                new EjercicioAsignado(
                    dea.EjercicioAsignadoPlan.id,
                    dea.EjercicioAsignadoPlan.ejercicios.nombre,
                    dea.EjercicioAsignadoPlan.ejercicios.MET.toNumber(),
                    dea.completado,
                    dea.EjercicioAsignadoPlan.duracion.toNumber()
                )
            );

            return new DiaPlanEjercicio(dia.id, dia.fecha, ejercicios);
        });
    }

    async addDiaPlan(planId: number, dia: Date): Promise<void> {
        try {
            const newFecha = await this.prisma.diasPlan.create({
                data: {
                    planId,
                    fecha: dia
                }
            });

            const ejerciciosAsignado = await this.prisma.ejercicioAsignadoPlan.findMany({
                where: { planId }
            });

            if (ejerciciosAsignado.length > 0) {
                await this.prisma.diaEjercicioAsignado.createMany({
                    data: ejerciciosAsignado.map(e => ({
                        EjercicioAsignadoId: e.id,
                        diaPlanId: newFecha.id,
                        completado: false
                    }))
                });
            }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    // Duplicado detectado, retornar sin hacer nada
                    return;
                }
                if (error.code === 'P2003') {
                    throw new Error(`Plan con ID ${planId} no encontrado`);
                }
            }
            throw new Error('Falla en base de datos al agregar día al plan');
        }
    }


    async deleteDiaPlan(planId: number, dia: Date): Promise<void> {
        try {
            const diaToDelete = await this.prisma.diasPlan.findFirst({
                where: {
                    planId,
                    fecha: dia
                }
            });

            if (!diaToDelete) {
                throw new Error(`Día no encontrado en el plan ${planId}`);
            }

            await this.prisma.diasPlan.delete({
                where: { id: diaToDelete.id }
            });
        } catch (error) {
            if (error instanceof Error && error.message.includes('no encontrado')) {
                throw error;
            }
            throw new Error('Falla en base de datos al eliminar día del plan');
        }
    }

    async updateDiaPlan(dia: DiaPlanEjercicio): Promise<void> {
        try {
            // Separar por estado completado
            const completados = dia.ejercicioAsignados
                .filter(e => e.completado)
                .map(e => e.id);

            const noCompletados = dia.ejercicioAsignados
                .filter(e => !e.completado)
                .map(e => e.id);

            // Actualizar en batch
            const updates = [];

            if (completados.length > 0) {
                updates.push(
                    this.prisma.diaEjercicioAsignado.updateMany({
                        where: { id: { in: completados } },
                        data: { completado: true }
                    })
                );
            }

            if (noCompletados.length > 0) {
                updates.push(
                    this.prisma.diaEjercicioAsignado.updateMany({
                        where: { id: { in: noCompletados } },
                        data: { completado: false }
                    })
                );
            }

            await Promise.all(updates);
        } catch (error) {
            throw new Error('Falla en base de datos al actualizar día del plan');
        }
    }

    // ===== FUNCIONES DE EJERCICIO PLAN =====

    async addEjercicioPlan(planId: number, ejercicioId: number, duracion: number = 30): Promise<void> {
        try {
            const ejercicioAsignado = await this.prisma.ejercicioAsignadoPlan.create({
                data: {
                    ejercicioId: BigInt(ejercicioId),
                    planId,
                    duracion
                }
            });

            const diasPlan = await this.prisma.diasPlan.findMany({
                where: { planId },
                select: { id: true }
            });

            if (diasPlan.length > 0) {
                await this.prisma.diaEjercicioAsignado.createMany({
                    data: diasPlan.map(dia => ({
                        diaPlanId: dia.id,
                        EjercicioAsignadoId: ejercicioAsignado.id,
                        completado: false
                    }))
                });
            }
        } catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    // Duplicado detectado, retornar sin hacer nada
                    return;
                }
                if (error.code === 'P2003') {
                    throw new Error('Plan o ejercicio no encontrado');
                }
            }
            throw new Error('Falla en base de datos al agregar ejercicio al plan');
        }
    }

    async deleteEjercicioPlan(planId: number, ejercicioId: number): Promise<void> {
        try {
            const ejerciciosAsignados = await this.prisma.ejercicioAsignadoPlan.findMany({
                where: {
                    planId,
                    ejercicioId: BigInt(ejercicioId)
                },
                select: { id: true }
            });

            if (ejerciciosAsignados.length === 0) {
                throw new Error(`Ejercicio no encontrado en el plan ${planId}`);
            }

            await this.prisma.ejercicioAsignadoPlan.deleteMany({
                where: {
                    planId,
                    ejercicioId: BigInt(ejercicioId)
                }
            });
        } catch (error) {
            if (error instanceof Error && error.message.includes('no encontrado')) {
                throw error;
            }
            throw new Error('Falla en base de datos al eliminar ejercicio del plan');
        }
    }
}
