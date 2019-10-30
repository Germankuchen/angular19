export class Usuario {
    public nombre: string;
    public email: string;
    public password: string;
    public role: string;
    public img: string;
    public google: boolean;
    public _id: string;

    constructor(
        nombre: string, email: string, password: string, role?: string, img?: string, google?: boolean, id?: string
    ) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.role = role;
        this.img = img;
        this.google = google;
        this._id = id;
    }
}