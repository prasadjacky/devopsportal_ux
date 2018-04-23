
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minusSignToParens'
})
export class MinusSignToParens implements PipeTransform {

  transform(value: any, args?: any): any {
   return String(value).charAt(0) == '-' ?
           String(value).substring(1, value.length) :
           value;
  }

}
