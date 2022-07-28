import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { ClubService } from 'src/app/services/club.service';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-crear-club',
  templateUrl: './crear-club.component.html',
  styleUrls: [ './crear-club.component.css' ]
} )
export class CrearClubComponent implements OnInit {
  crearClub: FormGroup
  arrGenres: any
  arrBooks: any
  constructor (
    private clubService: ClubService,
    private bookService: BookService,
    private userService: UserService,
    private router: Router
  ) {
    this.crearClub = new FormGroup( {
      name: new FormControl( '', [
        Validators.required,
        Validators.minLength( 3 ),
        Validators.maxLength( 64 )
      ] ),
      image: new FormControl( '', [
        Validators.required,
        Validators.pattern( /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/ )
      ] ),
      num_pages: new FormControl( '', [
        Validators.required
      ] ),
      genre_id: new FormControl( '', [
        Validators.required
      ] ),
      book_id: new FormControl( '', [
        Validators.required
      ] ),
    }, [] )

    this.clubService.getAllGenre()
      .then( result => this.arrGenres = result )
      .catch( err => console.log( err ) )
    this.bookService.getAllByGenre()
      .then( result => this.arrBooks = result )
      .catch( err => console.log( err ) )
  }

  ngOnInit (): void {
  }
  selectBooks ( $event: any ) {
    this.bookService.getByGenre( $event.target.value )
      .then( result => this.arrBooks = result )
      .catch( err => console.log( err ) )
  }

  async getDataForm () {
    const dataForm: any = await this.clubService.create( this.crearClub.value )
    await this.userService.subscribe( dataForm.id )
    this.router.navigate( [ '/club_lectura/' + dataForm.id ] )
  }

}
