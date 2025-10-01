import { EjercicioBase } from "./EjercicioBase";
export declare class EjercicioAsignado extends EjercicioBase {
    completado: boolean;
    duracionHoras: number;
    constructor(id: number, nombre: string, MET: number, completado: boolean, duracionHoras: number);
    calcularCaloriasQuemadas(pesoKg: number): number;
}
