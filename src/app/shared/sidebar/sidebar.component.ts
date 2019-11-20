import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/services.index';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public sidebar: SidebarService,
              private usuarioService: UsuarioService,
              private router: Router) {
    console.log('El menu es: ' + this.sidebar.menu[0].nombre);
   }

   logout() {
     this.usuarioService.logout();
     this.router.navigate(['/login']);
   }

  ngOnInit() {
  }

}
