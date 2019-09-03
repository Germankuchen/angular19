import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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
  @Output()
  actualizar: EventEmitter<number>;
  @ViewChild('entrada', {static: false})
  entrada: ElementRef;

  constructor() {
    this.actualizar = new EventEmitter();
  }

  ngOnInit() {
  }

  decrementar(progreso: number) {
    if (progreso - 5 >= 0) {
      progreso -= 5;
    }
    this.progreso = progreso;
    this.actualizar.emit(this.progreso);
    this.entrada.nativeElement.focus();
  }

  incrementar(progreso: number) {
    if (progreso + 5 <= 100) {
      progreso += 5;
    }
    this.progreso = progreso;
    this.actualizar.emit(this.progreso);
    console.log(this.entrada);
    this.entrada.nativeElement.focus();
  }

  cambiarValor(nuevoValor: number) {
    if (nuevoValor >= 0 && nuevoValor <= 100) {
      this.progreso = nuevoValor;
      this.actualizar.emit(this.progreso);
    } else {
      this.progreso = 0;
      this.actualizar.emit(this.progreso);
    }
  }

}
