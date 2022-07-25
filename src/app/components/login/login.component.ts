import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
} )
export class LoginComponent implements OnInit {
  login: FormGroup

  constructor (
    private userService: UserService,
    private router: Router
  ) {
    this.login = new FormGroup( {
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
    const response: any = await this.userService.login( this.login.value )
    console.log( response )
    if ( response.token ) {
      localStorage.setItem( 'user-token', response.token )
      this.router.navigate( [ '/home' ] )
    }
  }
}
