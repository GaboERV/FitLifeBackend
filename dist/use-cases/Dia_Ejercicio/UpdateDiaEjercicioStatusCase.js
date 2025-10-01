"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DiaPlanMapper_1 = require("../../mappers/DiaPlanMapper");
class UpdateDiaEjerciosCase {
    constructor(planRepository) {
        this.planRepository = planRepository;
    }
    async execute(updateDiaEjerciosDTO) {
        const diaEjercicio = await this.planRepository.getDiaPlanById(updateDiaEjerciosDTO.id);
        if (!diaEjercicio)
            throw new Error('Dia de ejercicio no encontrado');
        const updateDia = DiaPlanMapper_1.DiaPlanMapper.toDomain(updateDiaEjerciosDTO);
        await this.planRepository.updateDiaPlan(updateDia);
    }
}
//# sourceMappingURL=UpdateDiaEjercicioStatusCase.js.map