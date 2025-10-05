import { PlanRepository } from "../../../dominio/repositories/PlanRepository";

export class DeletePlanCase{
    constructor(
        private readonly planRepository: PlanRepository
    ){}
    async execute(id:number){
        await this.planRepository.deletePlan(id)
    }
}