import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { PlanSimpleResponseDTO } from "../../dto/plan/PlanSimpleResponse.dto";
export declare class GetPlanCase {
    readonly planRepository: PlanRepository;
    constructor(planRepository: PlanRepository);
    execute(userId: number): Promise<PlanSimpleResponseDTO[]>;
}
