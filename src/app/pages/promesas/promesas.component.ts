import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    let contador = 0;
    const promesa = new Promise((resolve, reject) => {
      const intervalo = setInterval( () => {
        console.log('Va contando ' + contador);
        if (contador === 3) {
          resolve('Llegue a 3 papá que mas queres');
          clearInterval(intervalo);
        }
        contador++;
      }, 2000);
    });

    promesa.then((retorna) => {
      console.log('Funciono todo JOYA y devolvio ' + retorna);
    }).catch((retorna) => {
      console.log('Se fue todo al carajo diría el huevon de Maduro ' + retorna);
    });

  }

  promesaLoca(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval( () => {
        console.log('Va contando ' + contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
        if (contador === 4) {
          reject(true);
          clearInterval(intervalo);
        }
        contador++;
      }, 2000);
    });
  }

  ngOnInit() {
  }

}
