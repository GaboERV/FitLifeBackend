import { DiaPlanEjercicio } from "./DiaPlanEjercicio";
import { PlanEjercicioBase } from "./PlanEjercicioBase";
export declare class PlanEjercicio extends PlanEjercicioBase {
    id: number;
    planesEjercio: DiaPlanEjercicio[];
    constructor(nombre: string, descripcion: string, userId: number, id: number, planesEjercio: DiaPlanEjercicio[]);
}
