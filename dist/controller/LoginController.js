"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
class LoginController {
    constructor(loginCase) {
        this.loginCase = loginCase;
        this.login = async (req, res) => {
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
                const payload = await this.loginCase.execute(correo, contrasena);
                res.status(201).json(payload);
            }
            catch (error) {
                console.error('Error al crear usuario:', error);
                res.status(500).json({
                    success: false,
                    error: `Error interno del servidor: ${error}`
                });
            }
        };
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=LoginController.js.map