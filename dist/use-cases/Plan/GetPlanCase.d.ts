import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { PlanEjercicioResponseDTO } from "../../dto/plan/PlanEjercicioResponse.dto";
export declare class GetPlanCase {
    readonly planRepository: PlanRepository;
    constructor(planRepository: PlanRepository);
    execute(id: number): Promise<PlanEjercicioResponseDTO>;
}
