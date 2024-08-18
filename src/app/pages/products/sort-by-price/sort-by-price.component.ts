import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-by-price',
  templateUrl: './sort-by-price.component.html',
  styleUrl: './sort-by-price.component.scss'
})
export class SortByPriceComponent {

  isPriceVisible = false;
  sortOrderPrice: string = '';

  @Output('selectedPriceSort') selectedPriceSort: EventEmitter<any> = new EventEmitter<any>();

  togglePrice() {
    this.isPriceVisible = !this.isPriceVisible; // Toggle the visibility
  }

  async productsByPrice(order: string) {
    this.sortOrderPrice = order;
    this.selectedPriceSort.emit(order)
  }

}
