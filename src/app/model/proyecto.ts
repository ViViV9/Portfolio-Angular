export class Proyecto {
    id!: number;
    titulo_proyecto: string;
    imagen_proyecto: string;
    url_proyecto: string;
    descripcion: string;

    constructor(titulo_proyecto: string, imagen_proyecto: string, url_proyecto: string, descripcion: string){
        this.titulo_proyecto= titulo_proyecto;
        this.imagen_proyecto= imagen_proyecto;
        this.url_proyecto= url_proyecto;
        this.descripcion= descripcion;
    }
}
