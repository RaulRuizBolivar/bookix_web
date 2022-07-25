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
      username: new FormControl( '', [
        Validators.required
      ] ),
      password: new FormControl( '', [
        Validators.required
      ] )
    }, [] )
  }

  ngOnInit (): void {
  }

  getDataForm () { }
}
