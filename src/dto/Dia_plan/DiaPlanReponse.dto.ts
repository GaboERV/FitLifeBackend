export interface DiaPlanResponseDTO {
    id: number;
    dia: Date;
    ejercicios: {
        id: number;
        completado: boolean;
    }[]
}
