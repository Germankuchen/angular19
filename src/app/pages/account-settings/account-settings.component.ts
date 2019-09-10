import { Component, OnInit, Inject } from '@angular/core';
import { $ } from 'protractor';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  tema = '';

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
  }

  cambiarTema(color: string) {
    this.tema = 'assets/css/colors/' + color + '.css';
    console.log(this.tema);
    this.document.getElementById('tema').setAttribute('href', this.tema);
  }

}
