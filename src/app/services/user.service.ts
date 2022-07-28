import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class UserService {


  baseUrl: string
  httpOptions: any


  constructor (
    private httpClient: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3000/api/users/'
    this.httpOptions = {
      headers: new HttpHeaders( {
        'Authorization': localStorage.getItem( 'user-token' ) || ''
      } )
    }
  }
  login ( form: any ): Promise<any> {
    return lastValueFrom( this.httpClient.post<any>( this.baseUrl + 'login', form ) )
  }

  register ( form: any ): Promise<any> {
    return lastValueFrom( this.httpClient.post<any>( this.baseUrl + 'register', form, this.httpOptions ) )
  }

  edit ( form: any ): Promise<any> {
    return lastValueFrom( this.httpClient.put<any>( this.baseUrl, form, this.httpOptions ) )
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


  subscribe ( book_club_id: number ): Promise<any> {

    return lastValueFrom( this.httpClient.post<any>( this.baseUrl + 'subscribe/' + book_club_id, null, this.httpOptions ) )
  }

  unsubscribe ( book_club_id: number ): Promise<any> {

    return lastValueFrom( this.httpClient.delete<any>( this.baseUrl + 'subscribe/' + book_club_id, this.httpOptions ) )
  }

  comment ( user_id: any, book_id: number, book_club_id: number, form: any ) {
    return lastValueFrom( this.httpClient.post<any>( this.baseUrl + 'comment/user/' + user_id + '/book/' + book_id + '/book_club/' + book_club_id, form ) )
  }

}
