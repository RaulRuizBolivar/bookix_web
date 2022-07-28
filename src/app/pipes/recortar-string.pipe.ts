import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
  name: 'recortarString'
} )
export class RecortarStringPipe implements PipeTransform {

  transform ( value: string | any, ...args: any[] ): string {
    if ( typeof value !== 'string' ) {
      return ''
    }
    return value.split( ' ' ).slice( 0, args[ 0 ] ).join( ' ' ) + args[ 1 ]
  }

}
