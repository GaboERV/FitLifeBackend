import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { DiaPlanResponseDTO } from "../../dto/Dia_plan/DiaPlanReponse.dto";
export declare class GetDiaEjercicioCase {
    private readonly planRepository;
    constructor(planRepository: PlanRepository);
    execute(id: number): Promise<DiaPlanResponseDTO>;
}
