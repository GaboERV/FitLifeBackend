import { Request, Response } from "express";
import { AsignarDiasEjercicioPlanCase } from "../../app/use-cases/Asignacion_Ejercicios/AsignarDiasEjercicioPlanCase";
import { AsignarEjerciciosPlanCase } from "../../app/use-cases/Asignacion_Ejercicios/AsignarEjerciciosPlanCase";
import { QuitarDiasEjercicioPlanCase } from "../../app/use-cases/Asignacion_Ejercicios/QuitarDiasAsignadosPlanCase";
import { QuitarEjerciciosPlanCase } from "../../app/use-cases/Asignacion_Ejercicios/QuitarEjerciciosPlanCase";

export class AsignacionEjerciciosController {
    constructor(
        private readonly asignarDiasEjercicioPlanCase: AsignarDiasEjercicioPlanCase,
        private readonly asignarEjerciciosPlanCase: AsignarEjerciciosPlanCase,
        private readonly quitarDiasEjercicioPlanCase: QuitarDiasEjercicioPlanCase,
        private readonly quitarEjerciciosPlanCase: QuitarEjerciciosPlanCase
    ) { }

    asignarDiasPlan = async (req: Request, res: Response): Promise<void> => {
        try {
            const { planId, Dias } = req.body;

            // Validaciones básicas de planId (se mantiene)
            if (!planId) {
                res.status(400).json({
                    success: false,
                    error: 'id de plan no pasada'
                });
                return;
            }

            if (!Dias || !this.isValidDateArray(Dias)) {
                res.status(400).json({
                    success: false,
                    error: 'El campo "Dias" es obligatorio y debe ser un array de fechas válidas (ej. ["2024-06-15", "2024-06-20"]).'
                });
                return;
            }

            const diasAsDate: Date[] = Dias.map((diaString: string) => new Date(diaString));


            await this.asignarDiasEjercicioPlanCase.excute(planId, diasAsDate);

            res.status(200).json({
                success: true,
                message: 'Días asignados al plan exitosamente.'
            });

        } catch (error) {
            console.error('Error en asignarDiasPlan:', error);
            res.status(500).json({
                success: false,
                error: `Error interno del servidor: ${error instanceof Error ? error.message : String(error)}`
            });
        }
    }
    asignarEjerciciosPlan = async (req: Request, res: Response): Promise<void> => {
        try {
            const { planId, EjerciciosId } = req.body;

            // Validaciones básicas de planId (se mantiene)
            if (!planId) {
                res.status(400).json({
                    success: false,
                    error: 'id de plan no pasada'
                });
                return;
            }

            if (!EjerciciosId || !this.isNumericArray(EjerciciosId)) {
                res.status(400).json({
                    success: false,
                    error: 'las ids deben ser numericas'
                });
                return;
            }

            await this.asignarEjerciciosPlanCase.execute(planId, EjerciciosId);

            res.status(200).json({
                success: true,
                message: 'Ejercicios Asignados existosamente'
            });

        } catch (error) {
            console.error('Error en asignarDiasPlan:', error);
            res.status(500).json({
                success: false,
                error: `${error}`
            });
        }
    }
    quitarDiasPlan = async (req: Request, res: Response): Promise<void> => {
        try {
            const { planId, Dias } = req.body;

            // Validaciones básicas de planId (se mantiene)
            if (!planId) {
                res.status(400).json({
                    success: false,
                    error: 'id de plan no pasada'
                });
                return;
            }

            if (!Dias || !this.isValidDateArray(Dias)) {
                res.status(400).json({
                    success: false,
                    error: 'El campo "Dias" es obligatorio y debe ser un array de fechas válidas (ej. ["2024-06-15", "2024-06-20"]).'
                });
                return;
            }

            const diasAsDate: Date[] = Dias.map((diaString: string) => new Date(diaString));


            await this.quitarDiasEjercicioPlanCase.excute(planId, diasAsDate);

            res.status(200).json({
                success: true,
                message: 'Días asignados al plan exitosamente.'
            });

        } catch (error) {
            console.error('Error en asignarDiasPlan:', error);
            res.status(500).json({
                success: false,
                error: `Error interno del servidor: ${error instanceof Error ? error.message : String(error)}`
            });
        }
    }
    quitarEjerciciosPlan = async (req: Request, res: Response): Promise<void> => {
        try {
            const { planId, EjerciciosId } = req.body;

            // Validaciones básicas de planId (se mantiene)
            if (!planId) {
                res.status(400).json({
                    success: false,
                    error: 'id de plan no pasada'
                });
                return;
            }

            if (!EjerciciosId || !this.isNumericArray(EjerciciosId)) {
                res.status(400).json({
                    success: false,
                    error: 'las ids deben ser numericas'
                });
                return;
            }

            await this.quitarEjerciciosPlanCase.execute(planId, EjerciciosId);

            res.status(200).json({
                success: true,
                message: 'Ejercicios Asignados existosamente'
            });

        } catch (error) {
            console.error('Error en asignarDiasPlan:', error);
            res.status(500).json({
                success: false,
                error: `${error}`
            });
        }
    }
    private isNumericArray = (arr: any): arr is number[] => {
        // 1. Verificar si es un array
        if (!Array.isArray(arr)) {
            return false;
        }


        return arr.every(item => typeof item === 'number' && !isNaN(item));
    };
    private isValidDateArray = (arr: any): arr is string[] => {
        // 1. Verificar si es un array
        if (!Array.isArray(arr)) {
            return false;
        }

        // 2. Usar .every() para chequear que CADA elemento es una fecha válida.
        return arr.every(item => {
            // Primero, debe ser una cadena de texto
            if (typeof item !== 'string') {
                return false;
            }

            // Intentar crear un objeto Date.
            const date = new Date(item);

            // Date.parse() devuelve NaN si la cadena no es válida.
            // getTime() devuelve NaN si la fecha no es válida.
            // isNaN(date.getTime()) es la forma estándar de verificar una fecha válida en JS.
            return !isNaN(date.getTime());
        });
    };
}