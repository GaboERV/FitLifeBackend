import { PlanEjercicioBase } from "./PlanEjercicioBase";
export declare class PlanEjercicioSimple extends PlanEjercicioBase {
    id?: number | undefined;
    constructor(nombre: string, descripcion: string, userId: number, id?: number | undefined);
}
