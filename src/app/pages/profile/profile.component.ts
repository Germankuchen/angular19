import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = this.usuarioService.usuario;
   }

   guardar() {
     console.log('Presionó guardar');
     this.usuarioService.actualizarUsuario(this.usuario).subscribe((datos) => {
       console.log('Se actualizó el usuario correctamente');
     });
   }

  ngOnInit() {
  }

}
