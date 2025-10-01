import { EjercicioAsignado } from "./EjercicioAsignado";
export declare class DiaPlanEjercicio {
    id: number;
    dia: string;
    ejercicioAsignados: EjercicioAsignado[];
    constructor(id: number, dia: string, ejercicioAsignados: EjercicioAsignado[]);
    calcularCaloriasTotalesQuemadas(pesoKg: number): number | null;
    obtenerCaloriasPorEjercicio(pesokg: number): {
        ejercicioId: number;
        nombre: string;
        caloriasQuemadas: number;
    }[];
    obtenerCaloriasDeEejerciciosCompletados(pesoKg: number): number | null;
    obtenerEjerciciosCompletados(pesoKg: number): {
        ejercicioId: number;
        nombre: string;
        caloriasQuemadas: number;
    }[];
}
