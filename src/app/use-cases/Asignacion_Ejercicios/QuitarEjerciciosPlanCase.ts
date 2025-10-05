import { PlanEjercicioSimple } from "../../../dominio/entities/PlanEjercioSimple";
import { PlanRepository } from "../../../dominio/repositories/PlanRepository";

export class QuitarEjerciciosPlanCase {
    constructor(
        private readonly planRepository: PlanRepository
    ) { }
    async execute(planId: number, EjerciciosIds: number[]) {
        const plan = await this.planRepository.getPlanSimpleById(planId)
        if (!plan) throw new Error('Plan no encontrado');

        for (const EjerciciosId of EjerciciosIds) {
            this.planRepository.deleteEjercicioPlan(planId, EjerciciosId)
        }
        return
    }
}