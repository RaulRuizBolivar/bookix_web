import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component( {
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: [ './editar-usuario.component.css' ]
} )
export class EditarUsuarioComponent implements OnInit {
  usuario: any
  editar_usuario: any
  constructor (
    private userService: UserService,
    private router: Router
  ) {
    this.userService.getUser()
      .then( result => this.usuario = result )
      .catch( err => console.log( err ) )
    this.editar_usuario = new FormGroup( {
      email: new FormControl( '', [
        Validators.required,
        Validators.pattern( /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/ )
      ] ),
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
      image: new FormControl( '', [
        Validators.required,
        Validators.pattern( /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/ )
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
    console.log( this.editar_usuario.value )
    const editUser = await this.userService.edit( this.editar_usuario.value )
    console.log( editUser )
    if ( editUser.id ) this.router.navigate( [ '/perfil' ] )
  }

}
