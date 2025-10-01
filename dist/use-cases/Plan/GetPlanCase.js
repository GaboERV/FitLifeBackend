"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPlanCase = void 0;
const PlanMapper_1 = require("../../mappers/PlanMapper");
class GetPlanCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(id) {
        const plan = await this.planRepository.getPlanById(id);
        if (!plan)
            throw new Error('Plan no existente');
        return PlanMapper_1.PlanMapper.toDTO(plan);
    }
}
exports.GetPlanCase = GetPlanCase;
//# sourceMappingURL=GetPlanCase.js.map