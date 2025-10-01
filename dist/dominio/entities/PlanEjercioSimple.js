"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanEjercicioSimple = void 0;
const PlanEjercicioBase_1 = require("./PlanEjercicioBase");
class PlanEjercicioSimple extends PlanEjercicioBase_1.PlanEjercicioBase {
    constructor(nombre, descripcion, userId, id) {
        super(nombre, descripcion, userId);
        this.id = id;
    }
}
exports.PlanEjercicioSimple = PlanEjercicioSimple;
//# sourceMappingURL=PlanEjercioSimple.js.map