import { AsignarDiasEjercicioPlanCase } from "../../app/use-cases/Asignacion_Ejercicios/AsignarDiasEjercicioPlanCase";
import { AsignarEjerciciosPlanCase } from "../../app/use-cases/Asignacion_Ejercicios/AsignarEjerciciosPlanCase";
import { QuitarDiasEjercicioPlanCase } from "../../app/use-cases/Asignacion_Ejercicios/QuitarDiasAsignadosPlanCase";
import { QuitarEjerciciosPlanCase } from "../../app/use-cases/Asignacion_Ejercicios/QuitarEjerciciosPlanCase";
import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { planRepositorySingleton } from "./Dependency";

export class AsignacionEjercicioDependencyFactory {
    private static instance: AsignacionEjercicioDependencyFactory

    private constructor(
        private readonly planrepository: PlanRepository
    ) { }
    static getInstance():AsignacionEjercicioDependencyFactory {
        if (!AsignacionEjercicioDependencyFactory.instance) {
            AsignacionEjercicioDependencyFactory.instance
                = new AsignacionEjercicioDependencyFactory(
                    planRepositorySingleton
                )
        }
        return AsignacionEjercicioDependencyFactory.instance
    }
    asignarDiasEjercicioPlanCase():AsignarDiasEjercicioPlanCase {
        return new AsignarDiasEjercicioPlanCase(
            this.planrepository
        )
    }
    asignarEjerciciosPlanCase():AsignarEjerciciosPlanCase {
        return new AsignarEjerciciosPlanCase(
            this.planrepository
        )
    }
    quitarDiasEjercicioPlanCase():QuitarDiasEjercicioPlanCase {
        return new QuitarDiasEjercicioPlanCase(
            this.planrepository
        )
    }

    quitarEjerciciosPlanCase():QuitarEjerciciosPlanCase {
        return new QuitarEjerciciosPlanCase(
            this.planrepository
        )
    }
}