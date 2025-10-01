import { PlanEjercicioBase } from "./PlanEjercicioBase";

export class PlanEjercicioSimple extends PlanEjercicioBase{
    constructor(
        nombre: string,
        descripcion: string,
        userId:number,
        public id?: number,
    ) { 
        super(nombre,descripcion,userId)
    }
}