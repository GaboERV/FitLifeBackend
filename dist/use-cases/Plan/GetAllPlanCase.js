"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlanCase = void 0;
const PlanMapper_1 = require("../../mappers/PlanMapper");
class GetPlanCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(userId) {
        const planes = await this.planRepository.getPlanByUserId(userId);
        if (!planes)
            throw new Error('No hay planes para este usuario');
        const result = [];
        for (const plan of planes) {
            result.push(PlanMapper_1.PlanMapper.toDTOSimple(plan));
        }
        return result;
    }
}
exports.GetPlanCase = GetPlanCase;
//# sourceMappingURL=GetAllPlanCase.js.map