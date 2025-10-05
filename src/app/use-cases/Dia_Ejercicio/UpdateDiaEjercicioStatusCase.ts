import { DiaPlanEjercicio } from "../../../dominio/entities/DiaPlanEjercicio";
import { PlanRepository } from "../../../dominio/repositories/PlanRepository";
import { DiaPlanResponseDTO } from "../../dto/Dia_plan/DiaPlanReponse.dto";
import { DiaPlanMapper } from "../../mappers/DiaPlanMapper";

export class UpdateDiaEjerciosCase {
    constructor(
        private readonly planRepository: PlanRepository
    ) { }

    async execute(updateDiaEjerciosDTO: DiaPlanResponseDTO) {
        const diaEjercicio = await this.planRepository.getDiaPlanById(updateDiaEjerciosDTO.id)
        if (!diaEjercicio) throw new Error('Dia de ejercicio no encontrado');
        const updateDia = DiaPlanMapper.toDomain(updateDiaEjerciosDTO)
        await this.planRepository.updateDiaPlan(updateDia)
    }
}
