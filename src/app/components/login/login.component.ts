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
    const response: any = await this.userService.login( this.login.value )
    if ( response.token ) {
      localStorage.setItem( 'user-token', response.token )
      window.location.href = '/home'
    }
  }
}
