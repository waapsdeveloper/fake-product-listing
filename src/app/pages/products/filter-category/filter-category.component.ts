import { Component, EventEmitter, Output } from '@angular/core';
import { FakeApiService } from '../../../services/fake-api.service';

@Component({
  selector: 'app-filter-category',
  templateUrl: './filter-category.component.html',
  styleUrl: './filter-category.component.scss'
})
export class FilterCategoryComponent {

  isCategoriesVisible = false;
  @Output('selectedCategory') selectedCategory: EventEmitter<any> = new EventEmitter<any>();

  constructor(public fakeapi: FakeApiService){

  }

  toggleCategories() {
    this.isCategoriesVisible = !this.isCategoriesVisible; // Toggle the visibility
  }

  async productsByCategory(cat: any){

    const c = await this.fakeapi.setSelectedCategories(cat)
    this.selectedCategory.emit(c)

  }
}
