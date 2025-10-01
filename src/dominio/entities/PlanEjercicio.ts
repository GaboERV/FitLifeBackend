import { DiaPlanEjercicio } from "./DiaPlanEjercicio";
import { PlanEjercicioBase } from "./PlanEjercicioBase";

export class PlanEjercicio extends PlanEjercicioBase {
    constructor(
        nombre: string,
        descripcion: string,
        userId:number,
        public id: number,
        public planesEjercio: DiaPlanEjercicio[]
    ) { 
        super(nombre,descripcion,userId)
    }
}