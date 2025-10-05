import { Router } from "express";
import { DiaEjercicioDependencyFactory } from "../Factory/DiaEjercicioDependencyFactory";
import { DiaEjercicioController } from "../controller/DiaEjercicioController";

const routerDiaEjercicio = Router()

const factory = DiaEjercicioDependencyFactory.getInstance()

const diaEjercicioController = new DiaEjercicioController(
    factory.getDiaEjercicioCase(),
    factory.updateDiaEjercicioCase()
)

/**
 * @swagger
 * components:
 *   schemas:
 *     EjercicioDia:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del ejercicio
 *           example: 1
 *         nombre:
 *           type: string
 *           description: Nombre del ejercicio
 *           example: Correr
 *         duracionHoras:
 *           type: number
 *           description: Duración del ejercicio en horas
 *           example: 0.5
 *         MET:
 *           type: number
 *           description: Equivalente metabólico
 *           example: 8.5
 *         completado:
 *           type: boolean
 *           description: Estado de completado del ejercicio
 *           example: false
 *     DiaPlanResponse:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del día de plan
 *           example: 1
 *         dia:
 *           type: string
 *           format: date-time
 *           description: Fecha del día de ejercicio
 *           example: "2025-10-04T00:00:00.000Z"
 *         ejercicios:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/EjercicioDia'
 *     UpdateDiaPlanRequest:
 *       type: object
 *       required:
 *         - dia
 *         - ejercicios
 *       properties:
 *         dia:
 *           type: string
 *           format: date-time
 *           description: Fecha del día de ejercicio
 *           example: "2025-10-04T00:00:00.000Z"
 *         ejercicios:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/EjercicioDia'
 *     DiaEjercicioSuccessResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         result:
 *           $ref: '#/components/schemas/DiaPlanResponse'
 *     DiaEjercicioUpdateResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         message:
 *           type: string
 *     DiaEjercicioErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         error:
 *           type: string
 */

/**
 * @swagger
 * /dia-ejercicio/obtener-dia-ejercicio/{id}:
 *   get:
 *     summary: Obtener información de un día de ejercicio específico
 *     description: Retorna los detalles de un día de ejercicio incluyendo todos los ejercicios programados
 *     tags: [Día Ejercicio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del día de ejercicio
 *     responses:
 *       200:
 *         description: Día de ejercicio obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DiaEjercicioSuccessResponse'
 *             example:
 *               success: true
 *               result:
 *                 id: 1
 *                 dia: "2025-10-04T00:00:00.000Z"
 *                 ejercicios:
 *                   - id: 1
 *                     nombre: Correr
 *                     duracionHoras: 0.5
 *                     MET: 8.5
 *                     completado: false
 *                   - id: 2
 *                     nombre: Nadar
 *                     duracionHoras: 1
 *                     MET: 7.0
 *                     completado: true
 *       400:
 *         description: ID no proporcionado o inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DiaEjercicioErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DiaEjercicioErrorResponse'
 */
routerDiaEjercicio.get('/obtener-dia-ejercicio/:id', diaEjercicioController.getDiaEjercicios)

/**
 * @swagger
 * /dia-ejercicio/actualizar-dia-ejercicio/{id}:
 *   patch:
 *     summary: Actualizar un día de ejercicio
 *     description: Actualiza la información de un día de ejercicio, incluyendo su fecha y ejercicios
 *     tags: [Día Ejercicio]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del día de ejercicio a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateDiaPlanRequest'
 *           example:
 *             dia: "2025-10-04T00:00:00.000Z"
 *             ejercicios:
 *               - id: 1
 *                 nombre: Correr
 *                 duracionHoras: 0.5
 *                 MET: 8.5
 *                 completado: true
 *     responses:
 *       200:
 *         description: Día de ejercicio actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DiaEjercicioUpdateResponse'
 *       400:
 *         description: Datos incompletos o ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DiaEjercicioErrorResponse'
 *       404:
 *         description: Día de ejercicio no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DiaEjercicioErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DiaEjercicioErrorResponse'
 */
routerDiaEjercicio.patch('/actualizar-dia-ejercicio/:id', diaEjercicioController.updateDiaEjercicio)

export default routerDiaEjercicio