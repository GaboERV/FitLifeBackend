import { DiaPlanEjercicio } from "../dominio/entities/DiaPlanEjercicio";
import { EjercicioAsignado } from "../dominio/entities/EjercicioAsignado";
import { DiaPlanResponseDTO } from "../dto/Dia_plan/DiaPlanReponse.dto";

export class DiaPlanMapper {
    static toDTO(diaPlanEjercicio: DiaPlanEjercicio): DiaPlanResponseDTO {
        return {
            id: diaPlanEjercicio.id,
            dia: diaPlanEjercicio.dia,
            ejercicios: diaPlanEjercicio.ejercicioAsignados.map(ejercicio => {
                return {
                    id: ejercicio.id,
                    nombre: ejercicio.nombre,
                    MET: ejercicio.MET,
                    duracionHoras: ejercicio.duracionHoras,
                    completado: ejercicio.completado
                }
            })
        }
    }

    static toDomain(diaPlanDTO: DiaPlanResponseDTO): DiaPlanEjercicio {
        const ejerciciosAsignados: EjercicioAsignado[] = diaPlanDTO.ejercicios.map(ejercicio => {
            return new EjercicioAsignado(
                ejercicio.id,
                ejercicio.nombre,
                ejercicio.MET,
                ejercicio.completado,
                ejercicio.duracionHoras
            )
        })
        return new DiaPlanEjercicio(diaPlanDTO.id, diaPlanDTO.dia, ejerciciosAsignados)
    }

}