import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {nombre: 'Principal',
     icono: 'mdi mdi-gauge',
     submenu: [
       {nombre: 'Dashboard', url: '/dashboard'},
       {nombre: 'Gráficas', url: '/grafica1'},
       {nombre: 'Promesas', url: '/promesas'},
       {nombre: 'Observables', url: '/rxjs'},
       {nombre: 'Progress bar', url: '/progress'}
     ]},
     {nombre: 'Mantenimiento',
     icono: 'mdi mdi-folder-lock-open',
     submenu: [
       {nombre: 'Usuarios', url: '/usuarios'},
       {nombre: 'Hospitales', url: '/hospitales'},
       {nombre: 'Médicos', url: '/medicos'}
     ]}
  ];

  constructor() { }
}
