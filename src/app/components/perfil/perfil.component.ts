import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
    private userService: UserService
  ) { }

  async ngOnInit () {
    this.user = await this.userService.getUser()
    this.historial = await this.userService.getHistorial()
    this.bookClubAdmin = await this.userService.getBookClubAdmin()
    this.subscriptions = await this.userService.getSubscriptions()
  }

}
