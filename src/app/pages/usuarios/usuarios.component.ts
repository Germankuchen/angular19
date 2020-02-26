import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarioBuscado: string;
  loadingCargando = true;
  usuariosVisualizados: Usuario[] = [];
  desde = 0;
  totalRegistros = 0;
  cantPaginas = 1;
  paginaActual = 1;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.loadingCargando = true;
    this.usuarioService.obtenerUsuarios(this.desde).subscribe((retorna: any) => {
      this.usuariosVisualizados = retorna.usuarios;
      this.totalRegistros = retorna.cantRegistros;
      this.cantPaginas = Math.ceil(this.totalRegistros / 5);
      this.loadingCargando = false;
    });
  }

  filtrarUsuario() {
    this.loadingCargando = true;
    console.log(this.usuarioBuscado);
    if (this.usuarioBuscado.length === 0) {
      this.buscar();
    } else {
      this.usuarioService.filtrarUsuarios(this.usuarioBuscado).subscribe((retorna: any) => {
        this.usuariosVisualizados = retorna.usuarios;
        this.totalRegistros = retorna.usuarios.length;
        this.cantPaginas = Math.ceil(this.totalRegistros / 5);
        this.loadingCargando = false;
      });
    }
  }

  abrirModal(usuario: Usuario) {
    
  }

  borrar(usuario: Usuario) {
    if (usuario._id === this.usuarioService.usuario._id) {
      alert('No se puede auto borrar');
      return;
    }
    this.usuarioService.borrar(usuario).subscribe((info) => {
      console.log('Se borro el usuario correctamente');
      this.buscar();
    });
  }

  guardar(usuario: Usuario) {
    this.usuarioService.actualizarUsuario(usuario).subscribe((retorna: any) => {
      console.log('Se actualizaron los datos del usuario correctamente');
      console.log(this.usuariosVisualizados);
    });
  }

  siguiente() {
    this.desde += 5;
    this.paginaActual++;
    this.buscar();
  }

  anterior() {
    this.desde -= 5;
    this.paginaActual--;
    this.buscar();
  }

  primero() {
    this.desde = 0;
    this.paginaActual = 1;
    this.buscar();
  }

  ultimo() {
    this.desde = 5 * this.cantPaginas - 5;
    this.paginaActual = this.cantPaginas;
    this.buscar();
  }

}
