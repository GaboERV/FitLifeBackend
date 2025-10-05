import { CreatePlanCase } from "../../app/use-cases/Plan/CreatePlanCase";
import { DeletePlanCase } from "../../app/use-cases/Plan/DeletePlanCase";
import { GetPlanCase } from "../../app/use-cases/Plan/GetPlanCase";
import { GetPlansCase } from "../../app/use-cases/Plan/GetPlansCase";
import { UpdatePlanCase } from "../../app/use-cases/Plan/UpdatePlanCase";
import { DeleteUserCase } from "../../app/use-cases/User/DeleteUserCase";
import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { UserRepository } from "../../dominio/repositories/UserRepository";
import { planRepositorySingleton, userRepositorySingleton } from "./Dependency";

export class PlanDependencyFactory {
    private static instance: PlanDependencyFactory

    private constructor(
        private readonly planRepository: PlanRepository,
        private readonly userRepository: UserRepository,
    ) { }

    static getInstance(): PlanDependencyFactory {
        if (!PlanDependencyFactory.instance) {
            PlanDependencyFactory.instance
                = new PlanDependencyFactory(
                    planRepositorySingleton,
                    userRepositorySingleton,
                )
        }
        return PlanDependencyFactory.instance
    }
    createPlanCase(): CreatePlanCase {
        return new CreatePlanCase(
            this.planRepository,
            this.userRepository)
    }
    deletePlanCase(): DeletePlanCase {
        return new DeletePlanCase(
            this.planRepository
        )
    }
    getPlansCase(): GetPlansCase {
        return new GetPlansCase(
            this.planRepository
        )
    }
    getPlanCase(): GetPlanCase {
        return new GetPlanCase(
            this.planRepository
        )
    }

    updatePlanCase(): UpdatePlanCase {
        return new UpdatePlanCase(
            this.planRepository
        )
    }
}