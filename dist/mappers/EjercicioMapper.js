"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EjercicioMapper = void 0;
class EjercicioMapper {
    static toDTO(ejercicio) {
        return ejercicio.map(ejercicio => {
            return {
                id: ejercicio.id,
                nombre: ejercicio.nombre,
                MET: ejercicio.MET
            };
        });
    }
}
exports.EjercicioMapper = EjercicioMapper;
//# sourceMappingURL=EjercicioMapper.js.map