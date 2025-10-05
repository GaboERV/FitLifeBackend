export interface UpdateUserDto{
    id: number,
    nombre?: string;
    pesoKg?: number;
    edad?: number;
    estaturaMetros?: number;
    correo?: string;
    contrasena?: string;
}