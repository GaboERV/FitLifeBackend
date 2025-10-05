import { PlanRepository } from "../../../dominio/repositories/PlanRepository";
import { PlanEjercicioResponseDTO } from "../../dto/plan/PlanEjercicioResponse.dto";
import { PlanMapper } from "../../mappers/PlanMapper";

export class GetPlanCase{
    constructor(
        public readonly planRepository: PlanRepository
    ){}

    async execute(id:number):Promise<PlanEjercicioResponseDTO>{
        const plan = await this.planRepository.getPlanById(id)
        if(!plan) throw new Error('Plan no existente')
        return PlanMapper.toDTO(plan)
    }
}