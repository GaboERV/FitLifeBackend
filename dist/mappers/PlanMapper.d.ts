import { PlanEjercicio } from "../dominio/entities/PlanEjercicio";
import { PlanEjercicioSimple } from "../dominio/entities/PlanEjercioSimple";
import { PlanEjercicioResponseDTO } from "../dto/plan/PlanEjercicioResponse.dto";
import { PlanSimpleResponseDTO } from "../dto/plan/PlanSimpleResponse.dto";
export declare class PlanMapper {
    static toDomain(raw: any): void;
    static toDTOSimple(plan: PlanEjercicioSimple): PlanSimpleResponseDTO;
    static toDTO(plan: PlanEjercicio): PlanEjercicioResponseDTO;
}
