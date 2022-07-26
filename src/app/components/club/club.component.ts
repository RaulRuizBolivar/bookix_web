import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  comment: FormGroup
  constructor (
    private activatedRoute: ActivatedRoute,
    private clubService: ClubService,
    private userService: UserService,
    private router: Router
  ) {
    this.comment = new FormGroup( {
      comment: new FormControl( '', [
        Validators.required
      ] )
    }, [] )
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

  subscribe ( state: boolean ) {
    if ( state ) {
      this.userService.subscribe( this.bookClub.id )
    } else {
      this.userService.unsubscribe( this.bookClub.id )
    }
    this.router.navigate( [ '/home' ] )
  }

  async getDataComment () {
    const response: any = await this.userService.comment( this.user.id, this.bookClub.book_id, this.bookClub.id, this.comment.value )
    this.router.navigate( [ '/perfil' ] )
  }
}


