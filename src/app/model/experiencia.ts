export class Experiencia {
    id!: number;
    nombre_empresa: string;
    puesto: string;
    logo_expe: string;
    desde: string;
    hasta: string;

    constructor(nombre_empresa: string, puesto: string, logo_expe: string, desde: string, hasta: string) {
        this.nombre_empresa= nombre_empresa;
        this.puesto= puesto;
        this.logo_expe= logo_expe;
        this.desde= desde;
        this.hasta= hasta;
    }
}
