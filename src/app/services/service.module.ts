import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SharedService, SidebarService, UsuarioService } from '../services/services.index';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardsGuard } from './guards/login-guards.guard';
import { SubirArchivoService } from './subir-archivo.service';
import { ModalUploadService } from '../components/modal-upload/modal-upload.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SettingsService, SharedService, SidebarService, UsuarioService, LoginGuardsGuard, SubirArchivoService, ModalUploadService
  ]
})
export class ServiceModule { }
