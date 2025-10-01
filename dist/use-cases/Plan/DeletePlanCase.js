"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePlanCase = void 0;
class DeletePlanCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(id) {
        await this.planRepository.deletePlan(id);
    }
}
exports.DeletePlanCase = DeletePlanCase;
//# sourceMappingURL=DeletePlanCase.js.map