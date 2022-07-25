import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: [ './historial.component.css' ]
} )
export class HistorialComponent implements OnInit {
  historial: any
  token: string = ''
  constructor (
    private httpClient: HttpClient,
    private userService: UserService
  ) {

  }

  async ngOnInit () {
    this.historial = await this.userService.getHistorial()
    console.log( this.historial )
  }

}
