import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor(private router: Router,
              private title: Title) {
    this.router.events.pipe(filter(info => info instanceof ActivationEnd), 
                            map((info: ActivationEnd) => info.snapshot.data)).subscribe(info => {
                              console.log(info);
                              if (info.titulo !== undefined) {
                                this.titulo = info.titulo;
                                this.title.setTitle('Framework Angular');
                              }
                            });

  }

  ngOnInit() {
  }

}
