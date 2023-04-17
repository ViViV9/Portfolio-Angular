export class Experiencia {
    id!: number;
    nombre_empresa: string;
    puesto: string;
    logo: string;
    desde: string;
    hasta: string;

    constructor(nombre_empresa: string, puesto: string, logo: string, desde: string, hasta: string) {
        this.nombre_empresa= nombre_empresa;
        this.puesto= puesto;
        this.logo= logo;
        this.desde= desde;
        this.hasta= hasta;
    }
}
