import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/services/club.service';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
} )
export class HomeComponent implements OnInit {
  arrBookClub: any
  constructor (
    private clubService: ClubService
  ) {
    this.clubService.getAllGenre().then( result => { this.arrBookClub = result; console.log( result ) } )
  }

  ngOnInit (): void {
  }

}
