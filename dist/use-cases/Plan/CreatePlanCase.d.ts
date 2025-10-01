import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { UserRepository } from "../../dominio/repositories/UserRepository";
import { CreatePlanDto } from "../../dto/plan/CreatePlan.dto";
export declare class CreatePlanCase {
    private readonly planRepository;
    private readonly userRepository;
    constructor(planRepository: PlanRepository, userRepository: UserRepository);
    execute(createPlanDto: CreatePlanDto): Promise<void>;
}
