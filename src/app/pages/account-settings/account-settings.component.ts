import { Component, OnInit, Inject } from '@angular/core';
import { $ } from 'protractor';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  tema = '';
  color = '';

  constructor(@Inject(DOCUMENT) private document,
              private settingsService: SettingsService) {
    this.settingsService.obtenerAjustes();
    this.color = this.settingsService.getTema();
  }

  ngOnInit() {
  }

  cambiarTema(color: string) {
    this.color = color;
    this.tema = 'assets/css/colors/' + color + '.css';
    console.log(this.tema);
    this.document.getElementById('tema').setAttribute('href', this.tema);
    this.settingsService.ajustes = {
      tema: color,
      temaURL: this.tema
    };
    this.settingsService.guardarAjustes();
  }

}
