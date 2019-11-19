import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';

declare function initPlugins();
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;
  recordarme = false;
  auth2: any;
  profile: any;
  tokenGoogle: string;

  constructor(private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    initPlugins();
    this.inicializarGoogle();
    if (localStorage.getItem('email')) {
      this.usuario = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  inicializarGoogle() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '331790147893-7c5elq3nd3s4djbn9gb23vg2mo4in25n.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSingIn(document.getElementById('botonLoginGoogle'));
    });
  }

  attachSingIn(element) {
    this.auth2.attachClickHandler(element, {}, (respuesta: any) => {
      this.profile = respuesta.getBasicProfile();
      console.log(this.profile);
      this.tokenGoogle = respuesta.getAuthResponse().id_token;
      console.log('El token de google es: ' + this.tokenGoogle);
      this.usuarioService.loginConGoogle(this.tokenGoogle).subscribe((info: any) => {
        console.log(info);
        this.usuarioService.guardarStorage(info.id, info.token, info.usuario);
        this.router.navigate(['/dashboard']);
      }, (error) => {
        console.log('Problema:' + JSON.stringify(error));
     }
    );
    });
  }

  ingresar() {
    console.log('Lo que ustede ingreso es ' + this.usuario + ', ' + this.password + ', ' + this.recordarme);

    if (this.recordarme) {
      localStorage.setItem('email', this.usuario);
    } else {
      localStorage.removeItem('email');
    }

    const usu = new Usuario(null, this.usuario, this.password);
    this.usuarioService.login(usu, this.recordarme).subscribe((info: any) => {
      console.log(info);
      this.usuarioService.guardarStorage(info.id, info.token, info.usuario);
      this.router.navigate(['/dashboard']);
    }, (error) => {
      console.error(error);
    });
  }

}
