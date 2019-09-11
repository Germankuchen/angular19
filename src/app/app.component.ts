import { Component } from '@angular/core';
import { SettingsService } from './services/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ej1';

  constructor(private settingsService: SettingsService) {
    this.settingsService.obtenerAjustes();

  }
}
