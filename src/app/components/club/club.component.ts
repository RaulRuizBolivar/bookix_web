import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: [ './club.component.css' ]
} )
export class ClubComponent implements OnInit {
  bookClub: any
  historial: any
  subs: any
  user: any
  isSub: boolean = false
  constructor (
    private activatedRoute: ActivatedRoute,
    private clubService: ClubService,
    private userService: UserService
  ) {

  }

  ngOnInit (): void {
    this.bookClub = this.activatedRoute.params.subscribe( async params => {
      let id = parseInt( params[ 'club_id' ] )
      this.bookClub = await this.clubService.getOne( id )
      this.historial = await this.clubService.getHistorial( id )
      this.subs = await this.clubService.getSubs( id )
      this.user = await this.userService.getUser()
      console.log( this.user )
      for ( let sub of this.subs ) {
        console.log( sub )
        if ( sub.id === this.user.id ) this.isSub = true; break
      }
      console.log( this.isSub )
    } )
  }

  subscribe () {
    this.userService.subscribe( this.bookClub.id )
  }
  unsubscribe () {
    this.userService.unsubscribe( this.bookClub.id )
  }

}
