"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanEjercicio = void 0;
const PlanEjercicioBase_1 = require("./PlanEjercicioBase");
class PlanEjercicio extends PlanEjercicioBase_1.PlanEjercicioBase {
    constructor(nombre, descripcion, userId, id, planesEjercio) {
        super(nombre, descripcion, userId);
        this.id = id;
        this.planesEjercio = planesEjercio;
    }
}
exports.PlanEjercicio = PlanEjercicio;
//# sourceMappingURL=PlanEjercicio.js.map