import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class UserService {
  baseUrl: string = 'http://localhost:3000/api/users/'
  httpOptions: any = {
    headers: new HttpHeaders( {
      'Authorization': localStorage.getItem( 'user-token' ) || ''
    } )
  }
  constructor (
    private httpClient: HttpClient
  ) { }
  login ( form: any ): Promise<any> {
    return lastValueFrom( this.httpClient.post<any>( this.baseUrl + 'login', form ) )
  }

  getHistorial (): Promise<any> {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + 'historial', this.httpOptions ) )
  }

  getUser (): Promise<any> {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl, this.httpOptions ) )
  }

  getBookClubAdmin (): Promise<any> {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + 'book_club', this.httpOptions ) )
  }

  getSubscriptions (): Promise<any> {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + 'subscriptions', this.httpOptions ) )
  }

}