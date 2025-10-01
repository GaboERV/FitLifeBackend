"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(createUserUseCase, deleteUserUseCase, updateUserUseCase, getUserUseCase) {
        this.createUserUseCase = createUserUseCase;
        this.deleteUserUseCase = deleteUserUseCase;
        this.updateUserUseCase = updateUserUseCase;
        this.getUserUseCase = getUserUseCase;
        // POST /users
        this.createUser = async (req, res) => {
            try {
                const { nombre, contrasena, correo, pesoKg, edad, estaturaMetros } = req.body;
                // Validaciones básicas
                if (!nombre || !contrasena || !correo) {
                    res.status(400).json({
                        success: false,
                        error: 'Nombre, contraseña y correo son requeridos'
                    });
                    return;
                }
                const user = await this.createUserUseCase.execute({
                    nombre,
                    contrasena,
                    correo,
                    pesoKg,
                    edad,
                    estaturaMetros
                });
                res.status(201).json({
                    success: true,
                    message: 'Usuario creado exitosamente',
                });
            }
            catch (error) {
                console.error('Error al crear usuario:', error);
                res.status(500).json({
                    success: false,
                    error: `Error interno del servidor: ${error}`
                });
            }
        };
        // PUT /users/:id
        this.updateUser = async (req, res) => {
            try {
                const id = parseInt(req.params.id);
                const { nombre, contrasena, correo, pesoKg, edad, estaturaMetros } = req.body;
                const updateUser = { id, nombre, pesoKg, contrasena, correo, edad, estaturaMetros };
                if (isNaN(id)) {
                    res.status(400).json({
                        success: false,
                        error: 'ID inválido'
                    });
                    return;
                }
                await this.updateUserUseCase.execute(updateUser);
                res.status(200).json({
                    success: true,
                    message: 'Usuario actualizado exitosamente'
                });
            }
            catch (error) {
                console.error('Error al actualizar usuario:', error);
                if (error instanceof Error && error.message.includes('no encontrado')) {
                    res.status(404).json({
                        success: false,
                        error: 'Usuario no encontrado'
                    });
                }
                else {
                    res.status(500).json({
                        success: false,
                        error: `Error interno del servidor: ${error}`
                    });
                }
            }
        };
        // DELETE /users/:id
        this.deleteUser = async (req, res) => {
            try {
                const { id, contrasena } = req.body;
                if (isNaN(id)) {
                    res.status(400).json({
                        success: false,
                        error: 'ID inválido'
                    });
                    return;
                }
                const deleteDTO = { id, contrasena };
                await this.deleteUserUseCase.execute(deleteDTO);
                res.status(200).json({
                    success: true,
                    message: 'Usuario eliminado exitosamente'
                });
            }
            catch (error) {
                console.error('Error al eliminar usuario:', error);
                if (error instanceof Error && error.message.includes('no encontrado')) {
                    res.status(404).json({
                        success: false,
                        error: 'Usuario no encontrado'
                    });
                }
                else {
                    res.status(500).json({
                        success: false,
                        error: `Error interno del servidor: ${error}`
                    });
                }
            }
        };
        // GET /users/:id
        this.getUserById = async (req, res) => {
            try {
                const id = parseInt(req.params.id);
                if (isNaN(id)) {
                    res.status(400).json({
                        success: false,
                        error: 'ID inválido'
                    });
                    return;
                }
                const userDTO = await this.getUserUseCase.execute(id);
                res.status(200).json({
                    success: true,
                    data: userDTO
                });
            }
            catch (error) {
                console.error('Error al obtener usuario:', error);
                if (error instanceof Error && error.message.includes('no encontrado')) {
                    res.status(404).json({
                        success: false,
                        error: 'Usuario no encontrado'
                    });
                }
                else {
                    res.status(500).json({
                        success: false,
                        error: `Error interno del servidor: ${error}`
                    });
                }
            }
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map