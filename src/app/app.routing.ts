import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';


export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'signin', component: LoginRegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: RegisterationComponent },
    { path: '', redirectTo: 'signin', pathMatch: 'full' }
];

