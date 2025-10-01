export interface DiaPlanResponseDTO {
    id: number;
    dia: string;
    ejercicios: {
        id: number;
        nombre: string;
        MET: number;
        duracionHoras: number;
        completado: boolean;
    }[];
}
