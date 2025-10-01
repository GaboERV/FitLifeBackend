"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuitarEjerciciosPlanCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(planId, EjerciciosIds) {
        const plan = await this.planRepository.getPlanSimpleById(planId);
        if (!plan)
            throw new Error('Plan no encontrado');
        for (const EjerciciosId of EjerciciosIds) {
            this.planRepository.deleteEjercicioPlan(planId, EjerciciosId);
        }
        return;
    }
}
//# sourceMappingURL=QuitarEjerciciosPlanCase.js.map