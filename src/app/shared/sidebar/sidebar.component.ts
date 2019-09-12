import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/services.index';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(public sidebar: SidebarService) {
    console.log('El menu es: ' + this.sidebar.menu[0].nombre);
   }

  ngOnInit() {
  }

}
