"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaPlanMapper = void 0;
const DiaPlanEjercicio_1 = require("../dominio/entities/DiaPlanEjercicio");
const EjercicioAsignado_1 = require("../dominio/entities/EjercicioAsignado");
class DiaPlanMapper {
    static toDTO(diaPlanEjercicio) {
        return {
            id: diaPlanEjercicio.id,
            dia: diaPlanEjercicio.dia,
            ejercicios: diaPlanEjercicio.ejercicioAsignados.map(ejercicio => {
                return {
                    id: ejercicio.id,
                    nombre: ejercicio.nombre,
                    MET: ejercicio.MET,
                    duracionHoras: ejercicio.duracionHoras,
                    completado: ejercicio.completado
                };
            })
        };
    }
    static toDomain(diaPlanDTO) {
        const ejerciciosAsignados = diaPlanDTO.ejercicios.map(ejercicio => {
            return new EjercicioAsignado_1.EjercicioAsignado(ejercicio.id, ejercicio.nombre, ejercicio.MET, ejercicio.completado, ejercicio.duracionHoras);
        });
        return new DiaPlanEjercicio_1.DiaPlanEjercicio(diaPlanDTO.id, diaPlanDTO.dia, ejerciciosAsignados);
    }
}
exports.DiaPlanMapper = DiaPlanMapper;
//# sourceMappingURL=DiaPlanMapper.js.map