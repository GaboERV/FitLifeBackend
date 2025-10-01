import { CorreoValidatorService } from "../../dominio/services/CorreoValidatorService";

export class CorreoValidatorServiceManual implements CorreoValidatorService {
    validarCorreo(correo: string): boolean {
        // Expresión regular para validar formato de correo electrónico
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Verificar que no esté vacío
        if (!correo || correo.trim() === '') {
            return false;
        }

        // Verificar formato con regex
        if (!regex.test(correo)) {
            return false;
        }

        // Validaciones adicionales
        const partes = correo.split('@');

        // Debe tener exactamente un @
        if (partes.length !== 2) {
            return false;
        }

        const [usuario, dominio] = partes;

        // El usuario no puede estar vacío o empezar/terminar con punto
        if (usuario.length === 0 || usuario.startsWith('.') || usuario.endsWith('.')) {
            return false;
        }

        // El dominio no puede estar vacío
        if (dominio.length === 0) {
            return false;
        }

        // No permitir puntos consecutivos
        if (correo.includes('..')) {
            return false;
        }

        return true;
    }
}