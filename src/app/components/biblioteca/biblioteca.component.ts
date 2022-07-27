import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

import SwiperCore, { Pagination, Navigation } from "swiper";


@Component( {
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: [ './biblioteca.component.css' ]
} )
export class BibliotecaComponent implements OnInit {
  arrBooks: any
  constructor (
    private bookService: BookService
  ) {
    this.bookService.getAllByGenre().then(
      result => {
        this.arrBooks = result
      }
    )

  }

  ngOnInit (): void {
    SwiperCore.use( [ Pagination, Navigation ] );
  }

}
