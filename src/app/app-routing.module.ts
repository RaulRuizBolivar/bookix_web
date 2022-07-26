import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClubComponent } from './components/club/club.component';
import { HomeComponent } from './components/home/home.component';
import { LibroComponent } from './components/libro/libro.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [ LoginGuard ] },
  { path: 'perfil', component: PerfilComponent, canActivate: [ LoginGuard ] },
  { path: 'club_lectura/:club_id', component: ClubComponent, canActivate: [ LoginGuard ] },
  { path: 'libro/:book_id', component: LibroComponent, canActivate: [ LoginGuard ] },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
