import { Pipe, PipeTransform } from '@angular/core';
import sortBy from 'sort-by';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(list: Object[],params: string[]): Object[] {
    if (params.length) {
      return this.list(sortBy(params))
    }
  }

}
