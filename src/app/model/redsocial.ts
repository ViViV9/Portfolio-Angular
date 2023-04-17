export class Redsocial {
    id!: number;
    url: string;
    icono_red: string;

    constructor(url: string, icono_red: string){
        this.url= url;
        this.icono_red= icono_red;
    }
}
