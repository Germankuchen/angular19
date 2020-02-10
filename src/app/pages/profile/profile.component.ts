import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { SubirArchivoService } from '../../services/subir-archivo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  imagenASubir: File;

  constructor(private usuarioService: UsuarioService,
              private subirArchivoService: SubirArchivoService) {
    this.usuario = this.usuarioService.usuario;
   }

   guardar() {
     console.log('Presionó guardar');
     this.usuarioService.actualizarUsuario(this.usuario).subscribe((datos: Usuario) => {
       console.log('Se actualizó el usuario correctamente');
       this.usuarioService.guardarStorage(datos._id, this.usuarioService.token, datos);
     });
   }

   seleccionoImagen(evento: any) {
      console.log(evento);
      if (evento.target.files.length === 0) {
        return;
      }
      this.imagenASubir = evento.target.files[0];
   }

   subirArchivo() {
     console.log('Presiono subir imagen');
     if (this.imagenASubir.type.indexOf('image') < 0) {
       alert('Debe seleccionar una imagen');
       return;
     }
     this.subirArchivoService.subirArchivo(this.imagenASubir, 'usuarios', this.usuarioService.usuario._id).then((info: any) => {
       console.log('Se subio el archivo');
       console.log(info);
       const respuesta = JSON.parse(info);
       this.usuarioService.usuario.img = respuesta.usuario.img;
       this.usuarioService.guardarStorageReducido();
     }).catch((error) => {
       console.log('retorno ' + error);
     });
   }

  ngOnInit() {
  }

}
