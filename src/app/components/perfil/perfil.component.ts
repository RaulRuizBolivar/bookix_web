import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: [ './perfil.component.css' ]
} )
export class PerfilComponent implements OnInit {
  user: any
  historial: any
  bookClubAdmin: any
  subscriptions: any
  constructor (
    private userService: UserService,
    private router: Router
  ) {
    this.cargarDatos()
  }

  ngOnInit () {
  }
  async cargarDatos () {
    this.user = await this.userService.getUser()
    this.historial = await this.userService.getHistorial()
    this.bookClubAdmin = await this.userService.getBookClubAdmin()
    this.subscriptions = await this.userService.getSubscriptions()
  }
  cerrarSesion () {
    localStorage.removeItem( 'user-token' )
    this.router.navigate( [ '/login' ] )
  }

}
