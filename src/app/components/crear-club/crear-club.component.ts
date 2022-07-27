import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component( {
  selector: 'app-crear-club',
  templateUrl: './crear-club.component.html',
  styleUrls: [ './crear-club.component.css' ]
} )
export class CrearClubComponent implements OnInit {
  crearClub: FormGroup
  constructor () {
    this.crearClub = new FormGroup( {}, [] )
  }

  ngOnInit (): void {
  }

  getDataForm () { }

}
