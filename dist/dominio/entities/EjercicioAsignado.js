"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EjercicioAsignado = void 0;
const EjercicioBase_1 = require("./EjercicioBase");
class EjercicioAsignado extends EjercicioBase_1.EjercicioBase {
    constructor(id, nombre, MET, completado, duracionHoras) {
        super(id, nombre, MET);
        this.completado = completado;
        this.duracionHoras = duracionHoras;
    }
    calcularCaloriasQuemadas(pesoKg) {
        return this.MET * pesoKg * this.duracionHoras;
    }
}
exports.EjercicioAsignado = EjercicioAsignado;
//# sourceMappingURL=EjercicioAsignado.js.map