import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';


export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'signin', component: LoginRegisterComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
];

