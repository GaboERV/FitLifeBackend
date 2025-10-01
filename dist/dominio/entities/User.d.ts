export declare class User {
    nombre: string;
    contrasena: string;
    correo: string;
    pesoKg: number;
    edad: number;
    estaturaMetros: number;
    id?: number | undefined;
    constructor(nombre: string, contrasena: string, correo: string, pesoKg: number, edad: number, estaturaMetros: number, id?: number | undefined);
    calcularImc(): number;
}
