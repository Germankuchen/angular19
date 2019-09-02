import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input()
  progreso = 50;
  @Input()
  leyenda = 'Leyenda';

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
