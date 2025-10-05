import { Request, Response } from "express";
import { GetEjercicioInforCase } from "../../app/use-cases/Ejercicios/GetEjerciciosInforCase";

export class EjercicioController {
    constructor(
        private readonly getEjerciciosInforCase: GetEjercicioInforCase
    ) { }

    getEjerciciosInfor = async (req: Request, res: Response) => {
        try {
            const ejercicios = await this.getEjerciciosInforCase.execute()

            res.status(200).json({
                success:true,
                result:ejercicios
            })
            return
        }
        catch (error) {
            res.status(500).json(
                {
                    success: false,
                    error: error
                }
            )
        }
    }
}