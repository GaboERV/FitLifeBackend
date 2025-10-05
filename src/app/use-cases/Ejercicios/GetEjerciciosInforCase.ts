
import { EjercicioRepository } from "../../../dominio/repositories/EjercicioRepository";
import { EjercicioResponseDTO } from "../../dto/Ejercicio/EjercicioResponse.dto";
import { EjercicioMapper } from "../../mappers/EjercicioMapper";


export class GetEjercicioInforCase {
    constructor(
        public readonly ejercicioRepository: EjercicioRepository
    ) { }

    async execute(): Promise<EjercicioResponseDTO[] | null> {
        const ejercicios = await this.ejercicioRepository.getAllEjercicios()
        if (!ejercicios) throw new Error('No hay ejercicios')
        return EjercicioMapper.toDTO(ejercicios)
    }

}