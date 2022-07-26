import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component( {
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: [ './libro.component.css' ]
} )
export class LibroComponent implements OnInit {
  libro: any
  constructor (
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe( async params => {
      this.libro = await this.bookService.getOne( params[ 'book_id' ] )
      console.log( this.libro )
    } )
  }

  ngOnInit (): void {
  }

}
