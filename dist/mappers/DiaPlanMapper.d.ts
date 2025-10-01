import { DiaPlanEjercicio } from "../dominio/entities/DiaPlanEjercicio";
import { DiaPlanResponseDTO } from "../dto/Dia_plan/DiaPlanReponse.dto";
export declare class DiaPlanMapper {
    static toDTO(diaPlanEjercicio: DiaPlanEjercicio): DiaPlanResponseDTO;
    static toDomain(diaPlanDTO: DiaPlanResponseDTO): DiaPlanEjercicio;
}
