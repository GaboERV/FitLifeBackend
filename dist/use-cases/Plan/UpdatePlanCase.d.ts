import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { UpdatePlanDto } from "../../dto/plan/UpdatePlan.dto";
export declare class UpdatePlanCase {
    private readonly planRepository;
    constructor(planRepository: PlanRepository);
    execute(updateUserDto: UpdatePlanDto): Promise<void>;
}
