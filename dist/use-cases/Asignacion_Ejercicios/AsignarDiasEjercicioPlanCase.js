"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsignarDiasEjercicioPlanCase = void 0;
class AsignarDiasEjercicioPlanCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async excute(planId, Dias) {
        const plan = await this.planRepository.getPlanSimpleById(planId);
        if (!plan)
            throw new Error('Plan no encontrado');
        for (const dia of Dias) {
            this.planRepository.addDiaPlan(planId, dia);
        }
        return;
    }
}
exports.AsignarDiasEjercicioPlanCase = AsignarDiasEjercicioPlanCase;
//# sourceMappingURL=AsignarDiasEjercicioPlanCase.js.map