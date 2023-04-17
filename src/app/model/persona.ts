export class Persona {
    id!: number;
    nombre: string;
    apellido: string;
    titulo: string;
    foto_perfil: string;
    textsobre_mi: string;
    textsobre_mi2: string;
    textsobre_mi3: string;
    cv: string;
    email: string;
    password: string;

    constructor(nombre: string, apellido: string, titulo: string, foto_perfil: string, textsobre_mi: string, textsobre_mi2: string, textsobre_mi3: string, cv: string,  email: string, password: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.foto_perfil = foto_perfil;
        this.textsobre_mi = textsobre_mi;
        this.textsobre_mi2 = textsobre_mi2;
        this.textsobre_mi3 = textsobre_mi3;
        this.cv= cv;
        this.email = email;
        this.password = password;
    }
}
