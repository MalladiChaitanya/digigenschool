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

import {HomeComponent} from "./components/home/home.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ChatListComponent} from "./components/chat/chat-list/chat-list.component";
import {ChatWindowComponent} from "./components/chat/chat-window/chat-window.component";
import {SingleChatComponent} from "./components/chat/single-chat/single-chat.component";
import {UserProfileComponent} from "./components/chat/user-profile/user-profile.component";
import {ContactProfileComponent} from "./components/chat/contact-profile/contact-profile.component";
import {SimpleMsgComponent} from "./components/messages/simple-msg/simple-msg.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    LoadingDialogDetailComponent,
    LoginRegisterComponent,
    RegisterationComponent,
    LoginComponent,
    HomeComponent,
    ChatListComponent,
    ChatWindowComponent,
    SingleChatComponent,
    UserProfileComponent,
    ContactProfileComponent,
    SimpleMsgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
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
