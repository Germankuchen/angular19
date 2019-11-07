import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';

declare function initPlugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;
  recordarme = false;

  constructor(private router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
    initPlugins();
  }

  ingresar() {
    console.log('Lo que ustede ingreso es ' + this.usuario + ', ' + this.password + ', ' + this.recordarme);
    const usu = new Usuario(null, this.usuario, this.password);
    this.usuarioService.login(usu, this.recordarme).subscribe((info: any) => {
      console.log(info);
      localStorage.setItem('token', info.token);
      localStorage.setItem('usuario', JSON.stringify(info.usuario));
      this.router.navigate(['/dashboard']);
    }, (error) => {
      console.error(error);
    });
  }

}
