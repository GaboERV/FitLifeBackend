import { Router } from "express";
import { EjerciciosDependencyFactory } from "../Factory/EjerciciosDependencyFactory";
import { EjercicioController } from "../controller/EjercicioController";

const routerEjercicio = Router()

const factory = EjerciciosDependencyFactory.getInstance()

const ejerciciosController = new EjercicioController( 
    factory.getEjercicioInforCase()
)

/**
 * @swagger
 * components:
 *   schemas:
 *     Ejercicio:
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
 *         MET:
 *           type: number
 *           description: Equivalente metabólico de la tarea (Metabolic Equivalent of Task)
 *           example: 8.5
 *     EjerciciosResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         result:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Ejercicio'
 *     EjercicioErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         error:
 *           type: string
 *           example: Error interno del servidor
 */

/**
 * @swagger
 * /ejercicios:
 *   get:
 *     summary: Obtener información de todos los ejercicios disponibles
 *     description: Retorna una lista con todos los ejercicios disponibles incluyendo su ID, nombre y valor MET
 *     tags: [Ejercicios]
 *     responses:
 *       200:
 *         description: Lista de ejercicios obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EjerciciosResponse'
 *             example:
 *               success: true
 *               result:
 *                 - id: 1
 *                   nombre: Correr
 *                   MET: 8.5
 *                 - id: 2
 *                   nombre: Caminar
 *                   MET: 3.5
 *                 - id: 3
 *                   nombre: Nadar
 *                   MET: 7.0
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EjercicioErrorResponse'
 */
routerEjercicio.get('/', ejerciciosController.getEjerciciosInfor)

export default routerEjercicio