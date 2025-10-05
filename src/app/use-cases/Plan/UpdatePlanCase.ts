import { PlanRepository } from "../../../dominio/repositories/PlanRepository";
import { UpdatePlanDto } from "../../dto/plan/UpdatePlan.dto";


export class UpdatePlanCase {
    constructor(
        private readonly planRepository: PlanRepository
    ) { }

    async execute(updateUserDto: UpdatePlanDto): Promise<void> {
        const { id, nombre, descripcion } = updateUserDto
        const plan = await this.planRepository.getPlanSimpleById(id)
        if (!plan) throw new Error('Plan no encontrado')
        if (nombre) plan.nombre = nombre
        if (descripcion) plan.descripcion = descripcion
        await this.planRepository.savePlan(plan)
    }
}