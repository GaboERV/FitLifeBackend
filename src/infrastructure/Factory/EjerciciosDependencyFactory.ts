import { GetEjercicioInforCase } from "../../app/use-cases/Ejercicios/GetEjerciciosInforCase";
import { EjercicioRepository } from "../../dominio/repositories/EjercicioRepository";
import { ejercicioRepositorySingleton } from "./Dependency";

export class EjerciciosDependencyFactory {
    private static instance: EjerciciosDependencyFactory

    private constructor(
        private readonly ejerciciosRepository: EjercicioRepository
    ) { }

    static getInstance() {
        if (!EjerciciosDependencyFactory.instance) {
            EjerciciosDependencyFactory.instance
                = new EjerciciosDependencyFactory(
                    ejercicioRepositorySingleton
                )
        
        }
        return EjerciciosDependencyFactory.instance
    }

    getEjercicioInforCase():GetEjercicioInforCase {
        return new GetEjercicioInforCase(
            this.ejerciciosRepository
        )
    }
}