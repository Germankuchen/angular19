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
       {nombre: 'Progress bar', url: '/progress'}
     ]}
  ];

  constructor() { }
}
