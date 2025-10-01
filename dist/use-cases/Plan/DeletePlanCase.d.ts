import { PlanRepository } from "../../dominio/repositories/PlanRepository";
export declare class DeletePlanCase {
    private readonly planRepository;
    constructor(planRepository: PlanRepository);
    execute(id: number): Promise<void>;
}
