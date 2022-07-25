import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return lastValueFrom( this.httpClient.post<any>( this.baseUrl + 'login', form ) )
  }

  getHistorial (): Promise<any> {
    let token = localStorage.getItem( 'user-token' )
    const httpOptions: any = {
      headers: new HttpHeaders( {
        'Authorization': token || ''
      } )
    }
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + 'historial', httpOptions ) )
  }

}
