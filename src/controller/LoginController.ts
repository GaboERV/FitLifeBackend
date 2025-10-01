import { Request, Response } from "express";
import { LoginCase } from "../use-cases/sesion/LoginCase";


export class LoginController {
    constructor(
        private readonly loginCase: LoginCase
    ) { }

    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { contrasena, correo } = req.body;

            // Validaciones básicas
            if (!!contrasena || !correo) {
                res.status(400).json({
                    success: false,
                    error: 'contraseña y correo son requeridos'
                });
                return;
            }

            const payload = await this.loginCase.execute(correo,contrasena);

            res.status(201).json(payload);

        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).json({
                success: false,
                error: 'Error interno del servidor'
            });
        }
    };
}