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
  ) { }

  ngOnInit () {
    this.cargarDatos()
  }
  cargarDatos () {
    this.userService.getUser()
      .then( response => this.user = response )
      .catch( err => console.log( err ) )
    this.userService.getHistorial()
      .then( response => this.historial = response )
      .catch( err => console.log( err ) )
    this.userService.getBookClubAdmin()
      .then( response => this.bookClubAdmin = response )
      .catch( err => console.log( err ) )
    this.userService.getSubscriptions()
      .then( response => this.subscriptions = response )
      .catch( err => console.log( err ) )
  }

  cerrarSesion () {
    localStorage.removeItem( 'user-token' )
    this.router.navigate( [ '/login' ] )
  }

}
