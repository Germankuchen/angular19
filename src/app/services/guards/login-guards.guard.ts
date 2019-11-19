import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardsGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService,
    private router: Router) {  }

  canActivate(): boolean {
    console.log('Se esta usando el guards');
    if (this.usuarioService.estaLogueado()) {
      console.log('Paso el guard');
      return true;
    } else {
      console.log('No paso el guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
