"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDiaEjercicioCase = void 0;
const DiaPlanMapper_1 = require("../../mappers/DiaPlanMapper");
class GetDiaEjercicioCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(id) {
        const diaPlan = await this.planRepository.getDiaPlanById(id);
        if (!diaPlan)
            throw new Error('Dia no encontrado');
        return DiaPlanMapper_1.DiaPlanMapper.toDTO(diaPlan);
    }
}
exports.GetDiaEjercicioCase = GetDiaEjercicioCase;
//# sourceMappingURL=GetDiaEjercicioCase.js.map