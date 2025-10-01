export class User {
    constructor(
        public nombre: string,
        public contrasena:string,
        public correo: string,
        public pesoKg: number,
        public edad: number,
        public estaturaMetros: number,
        public id?: number,
    ) { }

    calcularImc(): number {
        return this.pesoKg / this.estaturaMetros ** 2
    }
}