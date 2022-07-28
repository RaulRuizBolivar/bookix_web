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
        Validators.required
      ] ),
      name: new FormControl( '', [
        Validators.required
      ] ),
      username: new FormControl( '', [
        Validators.required
      ] ),
      image: new FormControl( '', [
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
    console.log( this.editar_usuario.value )
    const editUser = await this.userService.edit( this.editar_usuario.value )
    console.log( editUser )
    if ( editUser.id ) this.router.navigate( [ '/perfil' ] )
  }

}
