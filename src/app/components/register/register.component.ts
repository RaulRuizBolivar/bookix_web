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
        Validators.required
      ] ),
      username: new FormControl( '', [
        Validators.required
      ] ),
      email: new FormControl( '', [
        Validators.required
      ] ),
      password: new FormControl( '', [
        Validators.required
      ] )
    }, [] )
  }

  ngOnInit (): void {
  }

  async getDataForm () {
    const newUser = await this.userService.register( this.register.value )
    console.log( newUser )
    if ( newUser.id ) this.router.navigate( [ '/login' ] )
  }

}
