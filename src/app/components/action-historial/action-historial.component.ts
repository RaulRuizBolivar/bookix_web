import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'app-action-historial',
  templateUrl: './action-historial.component.html',
  styleUrls: [ './action-historial.component.css' ]
} )
export class ActionHistorialComponent implements OnInit {
  @Input() action: any
  constructor () { }

  ngOnInit (): void {
  }

}
