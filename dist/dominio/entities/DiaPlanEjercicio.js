"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiaPlanEjercicio = void 0;
class DiaPlanEjercicio {
    constructor(id, dia, ejercicioAsignados) {
        this.id = id;
        this.dia = dia;
        this.ejercicioAsignados = ejercicioAsignados;
    }
    calcularCaloriasTotalesQuemadas(pesoKg) {
        return this.ejercicioAsignados.reduce((total, ejercicio) => total + ejercicio.calcularCaloriasQuemadas(pesoKg), 0);
    }
    obtenerCaloriasPorEjercicio(pesokg) {
        return this.ejercicioAsignados.map(ejercicio => ({
            ejercicioId: ejercicio.id,
            nombre: ejercicio.nombre,
            caloriasQuemadas: ejercicio.calcularCaloriasQuemadas(pesokg)
        }));
    }
    obtenerCaloriasDeEejerciciosCompletados(pesoKg) {
        return this.ejercicioAsignados
            .filter(ejercicio => ejercicio.completado)
            .reduce((total, ejercicio) => total + ejercicio.calcularCaloriasQuemadas(pesoKg), 0);
    }
    obtenerEjerciciosCompletados(pesoKg) {
        return this.ejercicioAsignados
            .filter(ejercicio => ejercicio.completado)
            .map(ejercicio => ({
            ejercicioId: ejercicio.id,
            nombre: ejercicio.nombre,
            caloriasQuemadas: ejercicio.calcularCaloriasQuemadas(pesoKg)
        }));
    }
}
exports.DiaPlanEjercicio = DiaPlanEjercicio;
//# sourceMappingURL=DiaPlanEjercicio.js.map