
import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { PlanSimpleResponseDTO } from "../../dto/plan/PlanSimpleResponse.dto";
import { PlanMapper } from "../../mappers/PlanMapper";

export class GetPlanCase {
    constructor(
        public readonly planRepository: PlanRepository
    ) { }
    async execute(userId: number): Promise<PlanSimpleResponseDTO[]> {
        const planes = await this.planRepository.getPlanByUserId(userId)
        if (!planes) throw new Error('No hay planes para este usuario')
        const result: PlanSimpleResponseDTO[] = []
        for(const plan of planes){
            result.push(PlanMapper.toDTOSimple(plan))
        }
        return result
    }
}