import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { BACKEND_URL } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(private http: HttpClient) {
    console.log('Usuario de servicio iniciado');
    this.cargarStorage();
  }

  estaLogueado(){
    return (this.token != null);
  }

  agregar(usuario: Usuario) {
    const url = BACKEND_URL + '/usuario';
    console.log('Se va a llamar a la url: ' + url);
    return this.http.post(url, usuario);
  }

  actualizarUsuario(usuario: Usuario) {
    let url = BACKEND_URL + '/usuario/' + usuario._id;
    url += '?token=' + this.token;
    console.log('Se va a llamar a la url: ' + url);
    return this.http.put(url, usuario);
  }

  login(usuario: Usuario, recuerdame: boolean) {
    const url = BACKEND_URL + '/login';
    console.log('Se va a llamar a la url: ' + url);
    const cuerpo = {
      email: usuario.email,
      password: usuario.password
    };
    return this.http.post(url, cuerpo);
  }

  loginConGoogle(token: string) {
    const url = BACKEND_URL + '/login/google';
    console.log('Se va a llamar a la url: ' + url);
    const cuerpo = {
      token: token
    };
    return this.http.post(url, cuerpo);
  }

  logout() {
    this.usuario = null;
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('id', id);
    this.token = token;
    this.usuario = usuario;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = null;
      this.usuario = null;
    }
  }

}
