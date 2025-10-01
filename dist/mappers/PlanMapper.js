"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanMapper = void 0;
class PlanMapper {
    static toDomain(raw) {
    }
    static toDTOSimple(plan) {
        return {
            id: plan.id ?? 0,
            userId: plan.userId,
            nombre: plan.nombre,
            descripcion: plan.descripcion
        };
    }
    static toDTO(plan) {
        return {
            id: plan.id,
            userId: plan.userId,
            nombre: plan.nombre,
            descripcion: plan.descripcion,
            dias: plan.planesEjercio.map(dia => {
                return {
                    id: dia.id,
                    dia: dia.dia,
                    ejercicios: dia.ejercicioAsignados.map(ejercicio => {
                        return {
                            id: ejercicio.id,
                            nombre: ejercicio.nombre,
                            MET: ejercicio.MET,
                            duracionHoras: ejercicio.duracionHoras,
                            completado: ejercicio.completado
                        };
                    })
                };
            })
        };
    }
}
exports.PlanMapper = PlanMapper;
//# sourceMappingURL=PlanMapper.js.map