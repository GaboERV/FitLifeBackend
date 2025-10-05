import { CreatePlanCase } from "../../app/use-cases/Plan/CreatePlanCase";
import { GetPlanCase } from "../../app/use-cases/Plan/GetPlanCase";
import { GetPlansCase } from "../../app/use-cases/Plan/GetPlansCase";
import { UpdatePlanCase } from "../../app/use-cases/Plan/UpdatePlanCase";
import { Request, Response } from "express";
import { CreatePlanDto } from "../../app/dto/plan/CreatePlan.dto";
import { UpdatePlanDto } from "../../app/dto/plan/UpdatePlan.dto";
import { DeletePlanCase } from "../../app/use-cases/Plan/DeletePlanCase";

export class PlanController {
    constructor(
        private readonly getPlanCase: GetPlanCase,
        private readonly createPlanCase: CreatePlanCase,
        private readonly deletePlanCase: DeletePlanCase,
        private readonly getPlansCase: GetPlansCase,
        private readonly updatePlanCase: UpdatePlanCase
    ) { }

    getPlanById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = parseInt(req.params.id);

            if (!id) {
                res.status(400).json({
                    success: false,
                    error: "ID de plan no proporcionado"
                });
            }

            const plan = await this.getPlanCase.execute(id);

             res.status(200).json({
                success: true,
                result: plan
            });
        }
        catch (error) {
            console.error('Error obteniendo el plan', error);
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Error interno del servidor'
            });
        }
    }

    getPlansByUserId = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = parseInt(req.params.id);

            if (!id) {
                res.status(400).json({
                    success: false,
                    error: "ID de usuario no proporcionado"
                });
            }

            const planes = await this.getPlansCase.execute(id);

             res.status(200).json({
                success: true,
                result: planes
            });
        }
        catch (error) {
            console.error('Error obteniendo los planes', error);
             res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Error interno del servidor'
            });
        }
    }

    createPlan = async (req: Request, res: Response): Promise<void> => {
        try {
            const { userId, nombre, descripcion } = req.body;

            if (!userId || !nombre || !descripcion) {
                res.status(400).json({
                    success: false,
                    error: "Datos incompletos. Se requiere userId, nombre y descripción"
                });
            }

            const newPlan: CreatePlanDto = {
                userId,
                nombre,
                descripcion
            };

            await this.createPlanCase.execute(newPlan);

            res.status(201).json({
                success: true,
                message: "Plan creado exitosamente"
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Error interno del servidor'
            });
        }
    }

    updatePlan = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = parseInt(req.params.id);
            const { nombre, descripcion } = req.body;

            if (!id || !nombre || !descripcion) {
                res.status(400).json({
                    success: false,
                    error: "Datos incompletos. Se requiere id, nombre y descripción"
                });
            }

            const dtoUpdatePlan: UpdatePlanDto = {
                id,
                nombre,
                descripcion
            };

            await this.updatePlanCase.execute(dtoUpdatePlan);

            res.status(200).json({
                success: true,
                message: "Plan actualizado exitosamente"
            });
        }
        catch (error) {
             res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Error interno del servidor'
            });
        }
    }

    deletePlan = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = parseInt(req.params.id);

            if (!id) {
                res.status(400).json({
                    success: false,
                    error: "ID de plan no proporcionado"
                });
            }

            await this.deletePlanCase.execute(id);

            res.status(200).json({
                success: true,
                message: "Plan eliminado exitosamente"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Error interno del servidor'
            });
        }
    }
}