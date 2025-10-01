import { PlanRepository } from "../../dominio/repositories/PlanRepository";
import { DiaPlanResponseDTO } from "../../dto/Dia_plan/DiaPlanReponse.dto";
import { DiaPlanMapper } from "../../mappers/DiaPlanMapper";

export class  GetDiaEjercicioCase{
    constructor(
        private readonly planRepository:PlanRepository
    ){}
    async execute(id:number):Promise<DiaPlanResponseDTO>{
        const diaPlan = await this.planRepository.getDiaPlanById(id)
        if(!diaPlan) throw new Error('Dia no encontrado')
        return DiaPlanMapper.toDTO(diaPlan)
    }
}