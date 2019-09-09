import { Component, OnInit, Inject } from '@angular/core';
import { $ } from 'protractor';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
  }

  cambiarTema(color: string) {
    this.document.getElementById('tema').setAttribute('href', );
  }

}
