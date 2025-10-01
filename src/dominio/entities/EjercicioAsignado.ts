import { EjercicioBase } from "./EjercicioBase";

export class EjercicioAsignado extends EjercicioBase {
    constructor(
        id: number,
        nombre: string,
        MET: number,
        public completado: boolean,
        public duracionHoras: number,
    ) {
        super(id, nombre, MET)
    }
    calcularCaloriasQuemadas(pesoKg:number): number {
        return this.MET * pesoKg * this.duracionHoras
    }
}