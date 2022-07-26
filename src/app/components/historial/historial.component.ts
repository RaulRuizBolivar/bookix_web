import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: [ './historial.component.css' ]
} )
export class HistorialComponent implements OnInit {
  @Input() historial: any
  constructor (
    private httpClient: HttpClient,
    private userService: UserService
  ) {

  }

  async ngOnInit () { }

}
