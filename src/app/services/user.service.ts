import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class UserService {
  baseUrl: string = 'http://localhost:3000/api/users/'

  constructor (
    private httpClient: HttpClient
  ) { }
  login ( form: any ): Promise<any> {
    console.log( form )
    return lastValueFrom( this.httpClient.post<any>( this.baseUrl + 'login', form ) )
  }

}
