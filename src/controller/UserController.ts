import { Request, Response } from 'express';
import { CreateUserCase } from "../use-cases/User/CreateUserCase";
import { DeleteUserCase } from "../use-cases/User/DeleteUserCase";
import { UpdateUserCase } from "../use-cases/User/UpdateUserCase";
import { UpdateUserDto } from '../dto/user/UpdateUser.dto';
import { DeleteUserDto } from '../dto/user/DeleteUser.dto';
import { GetUserCase } from '../use-cases/User/GetUserCase';

export class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserCase,
        private readonly deleteUserUseCase: DeleteUserCase,
        private readonly updateUserUseCase: UpdateUserCase,
        private readonly getUserUseCase: GetUserCase
    ) { }

    // POST /users
    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { nombre, contrasena, correo, pesoKg, edad, estaturaMetros } = req.body;

            // Validaciones básicas
            if (!nombre || !contrasena || !correo ) {
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
        } catch (error) {
            console.error('Error al crear usuario:', error);
            res.status(500).json({
                success: false,
                error: 'Error interno del servidor'
            });
        }
    };

    // PUT /users/:id
    updateUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = parseInt(req.params.id);
            const { nombre, contrasena, correo, pesoKg, edad, estaturaMetros } = req.body;

            const updateUser: UpdateUserDto = { id, nombre, pesoKg ,contrasena, correo, edad, estaturaMetros }
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
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            if (error instanceof Error && error.message.includes('no encontrado')) {
                res.status(404).json({
                    success: false,
                    error: 'Usuario no encontrado'
                });
            } else {
                res.status(500).json({
                    success: false,
                    error: 'Error interno del servidor'
                });
            }
        }
    };

    // DELETE /users/:id
    deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id, contrasena } = req.body


            if (isNaN(id)) {
                res.status(400).json({
                    success: false,
                    error: 'ID inválido'
                });
                return;
            }
            const deleteDTO: DeleteUserDto = { id, contrasena }

            await this.deleteUserUseCase.execute(deleteDTO);

            res.status(200).json({
                success: true,
                message: 'Usuario eliminado exitosamente'
            });
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
            if (error instanceof Error && error.message.includes('no encontrado')) {
                res.status(404).json({
                    success: false,
                    error: 'Usuario no encontrado'
                });
            } else {
                res.status(500).json({
                    success: false,
                    error: 'Error interno del servidor'
                });
            }
        }
    };
    // GET /users/:id
    getUserById = async (req: Request, res: Response): Promise<void> => {
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
        } catch (error) {
            console.error('Error al obtener usuario:', error);
            if (error instanceof Error && error.message.includes('no encontrado')) {
                res.status(404).json({ 
                    success: false,
                    error: 'Usuario no encontrado' 
                });
            } else {
                res.status(500).json({ 
                    success: false,
                    error: 'Error interno del servidor' 
                });
            }
        }
    };

}