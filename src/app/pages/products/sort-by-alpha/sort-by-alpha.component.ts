import { Component, EventEmitter, Output } from '@angular/core';
import { FakeApiService } from '../../../services/fake-api.service';

@Component({
  selector: 'app-sort-by-alpha',
  templateUrl: './sort-by-alpha.component.html',
  styleUrl: './sort-by-alpha.component.scss'
})
export class SortByAlphaComponent {

  isAlphaVisible = false;
  sortOrderAlpha: string = '';

  @Output('selectedAlphaSort') selectedAlphaSort: EventEmitter<any> = new EventEmitter<any>();

  toggleAplha() {
    this.isAlphaVisible = !this.isAlphaVisible; // Toggle the visibility
  }

  async productsByAlpha(order: string) {
    this.sortOrderAlpha = order;
    this.selectedAlphaSort.emit(order)
  }

}
