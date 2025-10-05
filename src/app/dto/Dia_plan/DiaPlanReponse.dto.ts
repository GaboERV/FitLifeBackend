export interface DiaPlanResponseDTO {
    id: number;
    dia: Date;
    ejercicios: {
        id: number;
        nombre:string;
        duracionHoras:number;
        MET: number;
        completado: boolean;
    }[]
}
