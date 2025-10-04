export interface PlanEjercicioResponseDTO {
    id: number;
    userId:number;
    nombre: string;
    descripcion: string;
    dias: {
        id: number;
        dia: Date
        ejercicios: {
            id: number;
            nombre: string;
            MET:number;
            duracionHoras:number;
            completado: boolean;
        }[]
    }[]
}
