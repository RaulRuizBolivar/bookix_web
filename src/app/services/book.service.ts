import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable( {
  providedIn: 'root'
} )
export class BookService {
  baseUrl: string = 'http://localhost:3000/api/books/'
  httpOptions: any = {
    headers: new HttpHeaders( {
      'Authorization': localStorage.getItem( 'user-token' ) || ''
    } )
  }
  constructor (
    private httpClient: HttpClient
  ) { }

  getOne ( book_id: number ) {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + book_id, this.httpOptions ) )
  }
  getAllByGenre () {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + 'genre/', this.httpOptions ) )
  }
  getByGenre ( id: number ) {
    return lastValueFrom( this.httpClient.get<any>( this.baseUrl + 'genre/' + id, this.httpOptions ) )
  }
}
