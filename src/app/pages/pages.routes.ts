import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardsGuard } from '../services/guards/login-guards.guard';
import { ProfileComponent } from './profile/profile.component';

const pages: Routes = [
    {path: '',
     component: PagesComponent,
     canActivate: [LoginGuardsGuard],
     children: [    {path: 'progress', component: ProgressComponent, data: {titulo: 'Progress bar'}},
        {path: 'grafica1', component: Graficas1Component, data: {titulo: 'Gráficos'}},
        {path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Configuración'}},
        {path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'}},
        {path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'}},
        {path: 'rxjs', component: RxjsComponent, data: {titulo: 'Observadores'}},
        {path: 'profile', component: ProfileComponent, data: {titulo: 'Perfil'}},
        {path: '', component: DashboardComponent}]
    }
];

export const PAGES_ROUTER = RouterModule.forChild(pages);
