import { PlanEjercicioSimple } from "../../../dominio/entities/PlanEjercioSimple";
import { PlanRepository } from "../../../dominio/repositories/PlanRepository";
import { UserRepository } from "../../../dominio/repositories/UserRepository";
import { CreatePlanDto } from "../../dto/plan/CreatePlan.dto";

export class CreatePlanCase {
    constructor(
        private readonly planRepository: PlanRepository,
        private readonly userRepository: UserRepository
    ) { }

    async execute(createPlanDto: CreatePlanDto): Promise<void> {
        const { userId, nombre, descripcion } = createPlanDto;
        const user = await this.userRepository.getUserById(userId);
        if (!user) throw new Error('Usuario no encontrado');
        const newPlan = new PlanEjercicioSimple(descripcion, nombre,userId);
        await this.planRepository.savePlan(newPlan);
    }
}