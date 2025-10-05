import { PlanEjercicioSimple } from "../../../dominio/entities/PlanEjercioSimple";
import { PlanRepository } from "../../../dominio/repositories/PlanRepository";

export class AsignarDiasEjercicioPlanCase {
    constructor(
        private readonly planRepository: PlanRepository
    ) { }

    async excute(planId: number, Dias: Date[]): Promise<void> {
        const plan = await this.planRepository.getPlanSimpleById(planId)
        if (!plan) throw new Error('Plan no encontrado');

        for (const dia of Dias) {
            this.planRepository.addDiaPlan(planId, dia)
        }
        return
    }
}