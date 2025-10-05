import { Router } from "express";
import { PlanDependencyFactory } from "../Factory/PlanDependencyFactory";
import { PlanController } from "../controller/PlanController";

const routerPlan = Router()

const factory = PlanDependencyFactory.getInstance()

const planController = new PlanController(
    factory.getPlanCase(),
    factory.createPlanCase(),
    factory.deletePlanCase(), 
    factory.getPlansCase(), 
    factory.updatePlanCase()
)

/**
 * @swagger
 * components:
 *   schemas:
 *     Plan:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del plan
 *         userId:
 *           type: integer
 *           description: ID del usuario propietario
 *         nombre:
 *           type: string
 *           description: Nombre del plan
 *         descripcion:
 *           type: string
 *           description: Descripción del plan
 *     CreatePlanRequest:
 *       type: object
 *       required:
 *         - userId
 *         - nombre
 *         - descripcion
 *       properties:
 *         userId:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Plan de Cardio
 *         descripcion:
 *           type: string
 *           example: Plan de ejercicios cardiovasculares para 4 semanas
 *     UpdatePlanRequest:
 *       type: object
 *       required:
 *         - nombre
 *         - descripcion
 *       properties:
 *         nombre:
 *           type: string
 *           example: Plan de Cardio Avanzado
 *         descripcion:
 *           type: string
 *           example: Plan intensivo de ejercicios cardiovasculares
 *     PlanSuccessResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         message:
 *           type: string
 *     PlanErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         error:
 *           type: string
 */

/**
 * @swagger
 * /plans/user/{id}:
 *   get:
 *     summary: Obtener todos los planes de un usuario
 *     tags: [Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Lista de planes del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 result:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Plan'
 *       400:
 *         description: ID de usuario no proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanErrorResponse'
 */
routerPlan.get('/user/:id', planController.getPlansByUserId)

/**
 * @swagger
 * /plans/{id}:
 *   get:
 *     summary: Obtener un plan específico por ID
 *     tags: [Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del plan
 *     responses:
 *       200:
 *         description: Plan encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 result:
 *                   $ref: '#/components/schemas/Plan'
 *       400:
 *         description: ID de plan no proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanErrorResponse'
 */
routerPlan.get('/:id', planController.getPlanById)

/**
 * @swagger
 * /plans:
 *   post:
 *     summary: Crear un nuevo plan
 *     tags: [Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreatePlanRequest'
 *     responses:
 *       201:
 *         description: Plan creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanSuccessResponse'
 *       400:
 *         description: Datos incompletos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanErrorResponse'
 */
routerPlan.post('/', planController.createPlan)

/**
 * @swagger
 * /plans/{id}:
 *   put:
 *     summary: Actualizar un plan existente
 *     tags: [Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del plan a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdatePlanRequest'
 *     responses:
 *       200:
 *         description: Plan actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanSuccessResponse'
 *       400:
 *         description: Datos incompletos o ID inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanErrorResponse'
 */
routerPlan.put('/:id', planController.updatePlan)

/**
 * @swagger
 * /plans/{id}:
 *   delete:
 *     summary: Eliminar un plan
 *     tags: [Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del plan a eliminar
 *     responses:
 *       200:
 *         description: Plan eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanSuccessResponse'
 *       400:
 *         description: ID de plan no proporcionado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanErrorResponse'
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlanErrorResponse'
 */
routerPlan.delete('/:id', planController.deletePlan)

export default routerPlan