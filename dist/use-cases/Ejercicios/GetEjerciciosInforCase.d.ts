import { EjercicioRepository } from "../../dominio/repositories/EjercicioRepository";
export declare class GetEjercicioInforCase {
    readonly ejercicioRepository: EjercicioRepository;
    constructor(ejercicioRepository: EjercicioRepository);
    execute(): Promise<EjercicioResponseDTO[] | null>;
}
