import { PlanRepository } from "../../dominio/repositories/PlanRepository";
export declare class AsignarDiasEjercicioPlanCase {
    private readonly planRepository;
    constructor(planRepository: PlanRepository);
    excute(planId: number, Dias: Date[]): Promise<void>;
}
