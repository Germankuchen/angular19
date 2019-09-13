import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pages: Routes = [
    {path: '',
     component: PagesComponent,
     children: [    {path: 'progress', component: ProgressComponent},
        {path: 'grafica1', component: Graficas1Component},
        {path: 'account-settings', component: AccountSettingsComponent},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'promesas', component: PromesasComponent},
        {path: 'rxjs', component: RxjsComponent},
        {path: '', component: DashboardComponent}]
    }
];

export const PAGES_ROUTER = RouterModule.forChild(pages);
