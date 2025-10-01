import { EjercicioInformativo } from "../dominio/entities/EjercicioInformativo";

export class EjercicioMapper{
        static toDTO(ejercicio:EjercicioInformativo[]){
            return ejercicio.map( ejercicio => {
                return {
                    id : ejercicio.id,
                    nombre: ejercicio.nombre,
                    MET: ejercicio.MET
                }
            })
        }
}