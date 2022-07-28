import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-comment-historial',
  templateUrl: './comment-historial.component.html',
  styleUrls: [ './comment-historial.component.css' ]
} )
export class CommentHistorialComponent implements OnInit {
  @Input() comment: any
  constructor () { }

  ngOnInit (): void {
  }

}
