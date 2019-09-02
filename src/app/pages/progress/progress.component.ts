import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso = 50;

  constructor() { }

  ngOnInit() {
  }

  decrementar() {
    if (this.progreso - 5 >= 0) {
      this.progreso = this.progreso - 5;
    }
  }

  incrementar() {
    if (this.progreso + 5 <= 100) {
      this.progreso = this.progreso + 5;
    }
  }

}
