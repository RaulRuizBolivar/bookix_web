import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { ClubComponent } from './components/club/club.component';
import { CrearClubComponent } from './components/crear-club/crear-club.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { LibroComponent } from './components/libro/libro.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [ LoginGuard ] },
  { path: 'perfil', component: PerfilComponent, canActivate: [ LoginGuard ] },
  { path: 'club_lectura/:club_id', component: ClubComponent, canActivate: [ LoginGuard ] },
  { path: 'libro/:book_id', component: LibroComponent, canActivate: [ LoginGuard ] },
  { path: 'biblioteca', component: BibliotecaComponent, canActivate: [ LoginGuard ] },
  { path: 'crear_club', component: CrearClubComponent, canActivate: [ LoginGuard ] },
  { path: 'editar_usuario', component: EditarUsuarioComponent, canActivate: [ LoginGuard ] },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
} )
export class AppRoutingModule { }
