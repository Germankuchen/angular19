import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { BACKEND_URL } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
    console.log('Usuario de servicio iniciado');
  }

  agregar(usuario: Usuario) {
    const url = BACKEND_URL + '/usuario';
    console.log('Se va a llamar a la url: ' + url)
    return this.http.post(url, usuario);
  }

}
