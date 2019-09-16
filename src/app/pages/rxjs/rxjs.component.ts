import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subcripcion: Subscription;

  constructor() {

    this.subcripcion = this.crearObservable().subscribe(info => {console.log('Lo que devolvio el observador es: ' + info); },
                  error => {console.error('fallo papá ' + error); },
                  () => console.log('Ya termino de enviar info esto'));
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log('Se fue a otra página el hdp');
    this.subcripcion.unsubscribe();
  }

  crearObservable(): Observable<any> {
    const obs = new Observable<any>( observer => {
      let contador = 1;
      const intervalo = setInterval(() => {
        const dato = {
          info: contador
        };
        observer.next(dato);
        if (contador === 20) {
          clearInterval(intervalo);
          observer.complete();
        }
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.error('Se jodio todo');
        // }
        contador++;
      }, 1000);
    });
    return obs.pipe(filter(data => data.info % 2 === 1),
    map(data => data.info));
  }

}
