import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1 = 50;
  progreso2 = 30;

  constructor() { }

  ngOnInit() {
  }

  update(event: number, tipo: number) {
    console.log('Se actualizó a ' + event);
    if (tipo === 1) {
      this.progreso1 = event;
    } else {
      this.progreso2 = event;
    }
  }

}
