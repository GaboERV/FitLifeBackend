import { EjercicioInformativo } from "../entities/EjercicioInformativo";
export declare abstract class EjercicioRepository {
    abstract getAllEjercicios(): Promise<EjercicioInformativo[] | null>;
}
