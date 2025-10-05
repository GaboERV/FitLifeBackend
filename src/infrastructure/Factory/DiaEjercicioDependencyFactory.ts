import { GetDiaEjercicioCase } from "../../app/use-cases/Dia_Ejercicio/GetDiaEjercicioCase";
import { UpdateDiaEjerciosCase } from "../../app/use-cases/Dia_Ejercicio/UpdateDiaEjercicioStatusCase";
import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { planRepositorySingleton } from "./Dependency";

export class DiaEjercicioDependencyFactory {
    private static instance: DiaEjercicioDependencyFactory

    private constructor(
        private readonly planRepository: PlanRepository
    ) { }

    static getInstance():DiaEjercicioDependencyFactory {
        if (!DiaEjercicioDependencyFactory.instance) {
            DiaEjercicioDependencyFactory.instance
                = new DiaEjercicioDependencyFactory(
                    planRepositorySingleton
                )
        }
        return DiaEjercicioDependencyFactory.instance
    }

    getDiaEjercicioCase(): GetDiaEjercicioCase {
        return new GetDiaEjercicioCase(
            this.planRepository
        )
    }

    updateDiaEjercicioCase(): UpdateDiaEjerciosCase {
        return new UpdateDiaEjerciosCase(
            this.planRepository
        )
    }
}