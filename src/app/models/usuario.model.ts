export class Usuario {
    private nombre: string;
    private email: string;
    private password: string;
    private role: string;
    private img: string;
    private google: boolean;
    private _id: string;

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