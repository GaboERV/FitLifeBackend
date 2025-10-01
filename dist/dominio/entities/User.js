"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(nombre, contrasena, correo, pesoKg, edad, estaturaMetros, id) {
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.correo = correo;
        this.pesoKg = pesoKg;
        this.edad = edad;
        this.estaturaMetros = estaturaMetros;
        this.id = id;
    }
    calcularImc() {
        return this.pesoKg / this.estaturaMetros ** 2;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map