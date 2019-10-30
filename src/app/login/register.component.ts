import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../services/services.index';
import { Usuario } from '../models/usuario.model';
//import swal from 'sweetalert';
import { BACKEND_URL } from '../config/config';



declare function initPlugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    initPlugins();

    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, {validators: this.sonIguales('password', 'password2')});

  }

  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      const valor1 = group.controls[campo1].value;
      const valor2 = group.controls[campo2].value;
      if (valor1 === valor2) {
        return null;
      }
      return {
        esIgual: true
      };
    }
  }

  registrar() {
    if (!this.forma.value.condiciones) {
      alert('Debe aceptar las condiciones');
      return;
    }
    console.log(this.forma.value);
    const usu: Usuario = new Usuario(this.forma.value.nombre, this.forma.value.email, this.forma.value.password);
    this.usuarioService.agregar(usu).subscribe((info) => {
      alert('Se creo el usuario correctamente');
    }, (error) => {
      console.error(error);
    });
  }

}
