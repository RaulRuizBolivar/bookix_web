import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ActionHistorialComponent } from './components/action-historial/action-historial.component';
import { CommentHistorialComponent } from './components/comment-historial/comment-historial.component';
import { HistorialComponent } from './components/historial/historial.component';
import { ClubComponent } from './components/club/club.component';
import { RecortarStringPipe } from './pipes/recortar-string.pipe';

@NgModule( {
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PerfilComponent,
    ActionHistorialComponent,
    CommentHistorialComponent,
    HistorialComponent,
    ClubComponent,
    RecortarStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
