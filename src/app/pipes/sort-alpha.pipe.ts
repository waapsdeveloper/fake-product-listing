import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortAlpha'
})
export class SortAlphaPipe implements PipeTransform {

  transform(items: any[], sortBy: string = '', sortOrder: string = ''): any[] {
    if (!items || !items.length || sortBy == '' || sortOrder == '') {
      return items;
    }

    return items.sort((a, b) => {
      const aValue = a[sortBy].toString().toLowerCase();
      const bValue = b[sortBy].toString().toLowerCase();

      if (aValue < bValue) {
        return sortOrder === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortOrder === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}
