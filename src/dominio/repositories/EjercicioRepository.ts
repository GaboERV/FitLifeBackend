import { EjercicioInformativo } from "../entities/EjercicioInformativo";

export abstract class EjercicioRepository {
    abstract getAllEjercicios(): Promise<EjercicioInformativo[] | null>;
}