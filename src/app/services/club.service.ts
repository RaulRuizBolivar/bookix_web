import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class ClubService {
  baseUrl: string = 'http://localhost:3000/api/book_club/'
  httpOptions: any = {
    headers: new HttpHeaders( {
      'Authorization': localStorage.getItem( 'user-token' ) || ''
    } )
  }
  constructor (
    private httpClient: HttpClient
  ) { }

  async getOne ( id: number ) {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + id, this.httpOptions ) )
  }

  async getHistorial ( id: number ) {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + 'historial/' + id, this.httpOptions ) )
  }
  async getSubs ( id: number ) {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + 'subscribers/' + id, this.httpOptions ) )
  }

  async getAllGenre () {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + 'genre', this.httpOptions ) )
  }
}
