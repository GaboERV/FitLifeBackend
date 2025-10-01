import { DiaPlanEjercicio } from "../entities/DiaPlanEjercicio";
import { PlanEjercicio } from "../entities/PlanEjercicio";
import { PlanEjercicioSimple } from "../entities/PlanEjercioSimple";
export interface PlanRepository {
    getPlanById(id: number): Promise<PlanEjercicio | null>;
    getPlanSimpleById(id: number): Promise<PlanEjercicioSimple>;
    getPlanByUserId(userId: number): Promise<PlanEjercicioSimple[] | null>;
    createPlan(plan: PlanEjercicioSimple): Promise<void>;
    updatePlan(plan: PlanEjercicioSimple): Promise<void>;
    deletePlan(id: number): Promise<void>;
    getDiaPlanById(id: number): Promise<DiaPlanEjercicio>;
    getDiaPlanByPlanId(planId: number): Promise<DiaPlanEjercicio[]>;
    addDiaPlan(planId: number, dia: Date): Promise<void>;
    deleteDiaPlan(planId: number, dia: Date): Promise<void>;
    updateDiaPlan(dia: DiaPlanEjercicio): Promise<void>;
    addEjercicioPlan(planId: number, EjecicioId: number): Promise<void>;
    deleteEjercicioPlan(planId: number, EjecicioId: number): Promise<void>;
}
