import { EjercicioAsignado } from "./EjercicioAsignado";

export class DiaPlanEjercicio {
    constructor(
        public id: number,
        public dia: string,
        public ejercicioAsignados: EjercicioAsignado[]
    ) { }

    calcularCaloriasTotalesQuemadas(pesoKg: number): number | null {
        return this.ejercicioAsignados.reduce((total, ejercicio) => total + ejercicio.calcularCaloriasQuemadas(pesoKg), 0)
    }
    obtenerCaloriasPorEjercicio(pesokg: number): { ejercicioId: number, nombre: string, caloriasQuemadas: number }[] {
        return this.ejercicioAsignados.map(ejercicio => ({
            ejercicioId: ejercicio.id,
            nombre: ejercicio.nombre,
            caloriasQuemadas: ejercicio.calcularCaloriasQuemadas(pesokg)
        }))
    }
    obtenerCaloriasDeEejerciciosCompletados(pesoKg: number): number | null {
        return this.ejercicioAsignados
            .filter(ejercicio => ejercicio.completado)
            .reduce((total, ejercicio) => total + ejercicio.calcularCaloriasQuemadas(pesoKg), 0)
    }
    obtenerEjerciciosCompletados(pesoKg: number): { ejercicioId: number, nombre: string, caloriasQuemadas: number }[] {
        return this.ejercicioAsignados
        .filter(ejercicio => ejercicio.completado)
        .map(ejercicio => ({
            ejercicioId: ejercicio.id,
            nombre: ejercicio.nombre,
            caloriasQuemadas: ejercicio.calcularCaloriasQuemadas(pesoKg)
        }))
    }
}