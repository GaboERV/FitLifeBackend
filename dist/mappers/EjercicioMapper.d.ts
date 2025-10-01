import { EjercicioInformativo } from "../dominio/entities/EjercicioInformativo";
export declare class EjercicioMapper {
    static toDTO(ejercicio: EjercicioInformativo[]): {
        id: number;
        nombre: string;
        MET: number;
    }[];
}
