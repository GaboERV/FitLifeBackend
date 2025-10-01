"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlanCase = void 0;
class UpdatePlanCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(updateUserDto) {
        const { id, nombre, descripcion } = updateUserDto;
        const plan = await this.planRepository.getPlanSimpleById(id);
        if (!plan)
            throw new Error('Plan no encontrado');
        if (nombre)
            plan.nombre = nombre;
        if (descripcion)
            plan.descripcion = descripcion;
        await this.planRepository.updatePlan(plan);
    }
}
exports.UpdatePlanCase = UpdatePlanCase;
//# sourceMappingURL=UpdatePlanCase.js.map