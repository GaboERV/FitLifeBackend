"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuitarDiasEjercicioPlanCase = void 0;
class QuitarDiasEjercicioPlanCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async excute(planId, Dias) {
        const plan = await this.planRepository.getPlanSimpleById(planId);
        if (!plan)
            throw new Error('Plan no encontrado');
        for (const dia of Dias) {
            this.planRepository.deleteDiaPlan(planId, dia);
        }
        return;
    }
}
exports.QuitarDiasEjercicioPlanCase = QuitarDiasEjercicioPlanCase;
//# sourceMappingURL=QuitarDiasAsignadosPlanCase.js.map