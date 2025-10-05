import { PlanEjercicio } from "../../dominio/entities/PlanEjercicio";
import { PlanEjercicioSimple } from "../../dominio/entities/PlanEjercioSimple";
import { PlanEjercicioResponseDTO } from "../dto/plan/PlanEjercicioResponse.dto";
import { PlanSimpleResponseDTO } from "../dto/plan/PlanSimpleResponse.dto";

export class PlanMapper {
    static toDomain(raw: any) {

    }
    static toDTOSimple(plan: PlanEjercicioSimple): PlanSimpleResponseDTO {
        return{
            id: plan.id ?? 0,
            userId: plan.userId,
            nombre: plan.nombre,
            descripcion: plan.descripcion
        }
    }


    static toDTO(plan: PlanEjercicio):PlanEjercicioResponseDTO {
        return {
            id: plan.id ,
            userId: plan.userId,
            nombre: plan.nombre,
            descripcion: plan.descripcion,
            dias: plan.planesEjercio.map(dia => {
                return {
                    id: dia.id,
                    dia: dia.dia,
                    ejercicios: dia.ejercicioAsignados.map(ejercicio => {
                        return {
                            id:ejercicio.id,
                            nombre: ejercicio.nombre,
                            MET: ejercicio.MET,
                            duracionHoras: ejercicio.duracionHoras,
                            completado: ejercicio.completado
                        }
                    })
                }
            })
        }
    }

}
