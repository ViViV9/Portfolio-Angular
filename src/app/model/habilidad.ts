export class Habilidad {
    id!: number;
    nombre_skill: string;
    span: string;
    porcentaje: string;

    constructor(nombre_skill: string, span: string, porcentaje: string){
        this.nombre_skill= nombre_skill;
        this.span= span;
        this.porcentaje= porcentaje;
    }
}
