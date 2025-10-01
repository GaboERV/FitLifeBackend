"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlanCase = void 0;
const PlanEjercioSimple_1 = require("../../dominio/entities/PlanEjercioSimple");
class CreatePlanCase {
    constructor(planRepository, userRepository) {
        this.planRepository = planRepository;
        this.userRepository = userRepository;
    }
    async execute(createPlanDto) {
        const { userId, nombre, descripcion } = createPlanDto;
        const user = await this.userRepository.getUserById(userId);
        if (!user)
            throw new Error('Usuario no encontrado');
        const newPlan = new PlanEjercioSimple_1.PlanEjercicioSimple(descripcion, nombre, userId);
        await this.planRepository.createPlan(newPlan);
    }
}
exports.CreatePlanCase = CreatePlanCase;
//# sourceMappingURL=CreatePlanCase.js.map