import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MaterialModule } from './dependencies/material.module';
import { routes } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from './services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingDialogDetailComponent } from './components/loading-dialog/loading-dialog-detail.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoadingDialogDetailComponent,
    LoginRegisterComponent,
    RegisterationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppService
  ],
  entryComponents: [
    LoadingDialogDetailComponent,
    LoginRegisterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
