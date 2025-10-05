import { Router } from "express";
import { AsignacionEjercicioDependencyFactory } from "../Factory/AsignacionEjercicioDependencyFactory";
import { AsignacionEjerciciosController } from "../controller/AsignacionEjercicioController";

const routerAsignacionEjercicio = Router()

const factory = AsignacionEjercicioDependencyFactory.getInstance()

const asignacionEjerciciosController = new AsignacionEjerciciosController(
    factory.asignarDiasEjercicioPlanCase(),
    factory.asignarEjerciciosPlanCase(),
    factory.quitarDiasEjercicioPlanCase(),
    factory.quitarEjerciciosPlanCase()
)

/**
 * @swagger
 * components:
 *   schemas:
 *     AsignarDiasPlanRequest:
 *       type: object
 *       required:
 *         - planId
 *         - Dias
 *       properties:
 *         planId:
 *           type: integer
 *           description: ID del plan
 *           example: 1
 *         Dias:
 *           type: array
 *           items:
 *             type: string
 *             format: date
 *           description: Array de fechas en formato ISO
 *           example: ["2025-10-04", "2025-10-05", "2025-10-06"]
 *     AsignarEjerciciosPlanRequest:
 *       type: object
 *       required:
 *         - planId
 *         - EjerciciosId
 *       properties:
 *         planId:
 *           type: integer
 *           description: ID del plan
 *           example: 1
 *         EjerciciosId:
 *           type: array
 *           items:
 *             type: integer
 *           description: Array de IDs de ejercicios
 *           example: [1, 2, 3]
 *     AsignacionSuccessResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *     AsignacionErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         error:
 *           type: string
 */

/**
 * @swagger
 * /asignacion-ejercicio/asignar-dias-plan:
 *   post:
 *     summary: Asignar días a un plan de ejercicios
 *     description: Asigna múltiples días a un plan específico
 *     tags: [Asignación Ejercicios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AsignarDiasPlanRequest'
 *     responses:
 *       200:
 *         description: Días asignados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionSuccessResponse'
 *       400:
 *         description: Datos inválidos o incompletos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionErrorResponse'
 */
routerAsignacionEjercicio.post('/asignar-dias-plan', asignacionEjerciciosController.asignarDiasPlan)

/**
 * @swagger
 * /asignacion-ejercicio/asignar-ejercicios-plan:
 *   post:
 *     summary: Asignar ejercicios a un plan
 *     description: Asigna múltiples ejercicios a un plan específico
 *     tags: [Asignación Ejercicios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AsignarEjerciciosPlanRequest'
 *     responses:
 *       200:
 *         description: Ejercicios asignados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionSuccessResponse'
 *       400:
 *         description: Datos inválidos o incompletos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionErrorResponse'
 */
routerAsignacionEjercicio.post('/asignar-ejercicios-plan', asignacionEjerciciosController.asignarEjerciciosPlan)

/**
 * @swagger
 * /asignacion-ejercicio/eliminar-dias-plan:
 *   post:
 *     summary: Eliminar días de un plan de ejercicios
 *     description: Elimina días específicos de un plan
 *     tags: [Asignación Ejercicios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AsignarDiasPlanRequest'
 *     responses:
 *       200:
 *         description: Días eliminados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionSuccessResponse'
 *       400:
 *         description: Datos inválidos o incompletos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionErrorResponse'
 */
routerAsignacionEjercicio.post('/eliminar-dias-plan', asignacionEjerciciosController.quitarDiasPlan)

/**
 * @swagger
 * /asignacion-ejercicio/eliminar-ejercicios-plan:
 *   post:
 *     summary: Eliminar ejercicios de un plan
 *     description: Elimina ejercicios específicos de un plan
 *     tags: [Asignación Ejercicios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AsignarEjerciciosPlanRequest'
 *     responses:
 *       200:
 *         description: Ejercicios eliminados exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionSuccessResponse'
 *       400:
 *         description: Datos inválidos o incompletos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AsignacionErrorResponse'
 */
routerAsignacionEjercicio.post('/eliminar-ejercicios-plan', asignacionEjerciciosController.quitarEjerciciosPlan)

export default routerAsignacionEjercicio