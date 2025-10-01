"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEjercicioInforCase = void 0;
const EjercicioMapper_1 = require("../../mappers/EjercicioMapper");
class GetEjercicioInforCase {
    constructor(ejercicioRepository) {
        this.ejercicioRepository = ejercicioRepository;
    }
    async execute() {
        const ejercicios = await this.ejercicioRepository.getAllEjercicios();
        if (!ejercicios)
            throw new Error('No hay ejercicios');
        return EjercicioMapper_1.EjercicioMapper.toDTO(ejercicios);
    }
}
exports.GetEjercicioInforCase = GetEjercicioInforCase;
//# sourceMappingURL=GetEjerciciosInforCase.js.map