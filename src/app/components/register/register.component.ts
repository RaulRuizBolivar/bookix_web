import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css' ]
} )
export class RegisterComponent implements OnInit {
  register: FormGroup
  constructor (
    private userService: UserService,
    private router: Router
  ) {
    this.register = new FormGroup( {
      name: new FormControl( '', [
        Validators.required,
        Validators.minLength( 3 ),
        Validators.maxLength( 64 )
      ] ),
      username: new FormControl( '', [
        Validators.required,
        Validators.pattern( /(?=^.{3,20}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/ ),
        Validators.minLength( 3 ),
        Validators.maxLength( 64 )

      ] ),
      email: new FormControl( '', [
        Validators.required,
        Validators.pattern( /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/ )
      ] ),
      password: new FormControl( '', [
        Validators.required,
        Validators.minLength( 3 ),
        Validators.maxLength( 100 )
      ] )
    }, [] )
  }

  ngOnInit (): void {
  }

  async getDataForm () {
    const newUser = await this.userService.register( this.register.value )
    if ( newUser.id ) this.router.navigate( [ '/login' ] )
  }

}
