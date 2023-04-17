export class Educacion {
    id!: number;
    curso: string;
    institucion: string;
    titulo_curso: string;
    logo_educ: string;
    inicio: string;
    fin: string;

    constructor(curso: string, institucion: string, titulo_curso: string, logo_educ: string, inicio: string, fin: string) {
        this.curso= curso;
        this.institucion= institucion;
        this.titulo_curso= titulo_curso;
        this.logo_educ= logo_educ;
        this.inicio= inicio;
        this.fin= fin;
    }

}
