import { Router } from 'express';
import { LoginDependencyFactory } from '../Factory/LoginDependencyFactory';
import { LoginController } from '../controller/LoginController';

const routerLogin = Router();

// Obtener la factory singleton
const factory = LoginDependencyFactory.getInstance();

// Crear el controlador con los casos de uso
const loginController = new LoginController(
    factory.loginCase(),
);

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       required:
 *         - correo
 *         - contrasena
 *       properties:
 *         correo:
 *           type: string
 *           format: email
 *           example: usuario@example.com
 *         contrasena:
 *           type: string
 *           format: password
 *           example: miPassword123
 *     LoginResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         token:
 *           type: string
 *           description: Token de autenticación JWT
 *         user:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *             nombre:
 *               type: string
 *             correo:
 *               type: string
 *     LoginErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         error:
 *           type: string
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Datos incompletos (correo o contraseña faltante)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginErrorResponse'
 *       401:
 *         description: Credenciales inválidas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginErrorResponse'
 */
routerLogin.post('/login', loginController.login);

export default routerLogin;