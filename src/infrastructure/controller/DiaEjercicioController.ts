import { Request, Response } from "express";
import { GetDiaEjercicioCase } from "../../app/use-cases/Dia_Ejercicio/GetDiaEjercicioCase";
import { UpdateDiaEjerciosCase } from "../../app/use-cases/Dia_Ejercicio/UpdateDiaEjercicioStatusCase";
import { DiaPlanResponseDTO } from "../../app/dto/Dia_plan/DiaPlanReponse.dto";

export class DiaEjercicioController {
    constructor(
        private readonly getDiaEjercicioCase: GetDiaEjercicioCase,
        private readonly updateDiaEjerciciosCase: UpdateDiaEjerciosCase
    ) { }

    getDiaEjercicios = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)

            if (!id) {
                res.status(400).json({
                    success: false,
                    error: 'id de dia ejercicio no pasada'
                })
                return
            }

            const diaPlan = await this.getDiaEjercicioCase.execute(id)

            res.status(200).json({
                success: true,
                result: diaPlan
            })
            return
        } catch (error) {
            res.status(500).json({
                success: true,
                error: error
            })
            return
        }

    }

    updateDiaEjercicio = async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);

            if (!id) {
                res.status(400).json({
                    success: false,
                    error: 'ID de día ejercicio no proporcionado'
                });
                return
            }

            const updateData: DiaPlanResponseDTO = {
                id,
                ...req.body
            };

            // Validación básica del body
            if (!updateData.dia || !updateData.ejercicios) {
                res.status(400).json({
                    success: false,
                    error: 'Datos incompletos. Se requiere dia y ejercicios'
                });
                return
            }

            await this.updateDiaEjerciciosCase.execute(updateData);

            res.status(200).json({
                success: true,
                message: 'Día de ejercicio actualizado correctamente'
            });
            return
        } catch (error) {
            res.status(500).json({
                success: true,
                error: error
            })
            return

        }
    }
}