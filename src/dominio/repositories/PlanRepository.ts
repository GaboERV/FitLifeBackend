import { DiaPlanEjercicio } from "../entities/DiaPlanEjercicio";
import { PlanEjercicio } from "../entities/PlanEjercicio";
import { PlanEjercicioSimple } from "../entities/PlanEjercioSimple";

export interface PlanRepository {
    getPlanById(id: number): Promise<PlanEjercicio | null>;
    getPlanSimpleById(id: number): Promise<PlanEjercicioSimple | null>
    getPlanByUserId(userId: number): Promise<PlanEjercicioSimple[] | null>;
    savePlan(plan: PlanEjercicioSimple): Promise<void>;
    deletePlan(id: number): Promise<void>;

    getDiaPlanById(id: number): Promise<DiaPlanEjercicio | null>;
    getDiaPlanByPlanId(planId: number): Promise<DiaPlanEjercicio[]>;
    addDiaPlan(planId: number, dia: Date): Promise<void>;
    deleteDiaPlan(planId: number, dia: Date): Promise<void>;
    updateDiaPlan(dia: DiaPlanEjercicio): Promise<void>;

    addEjercicioPlan(planId: number, EjecicioId: number): Promise<void>;
    deleteEjercicioPlan(planId: number, EjecicioId: number): Promise<void>;
}