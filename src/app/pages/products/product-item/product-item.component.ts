import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {

  @Input('item') item: any;
  isModalVisible = false;

  toggleModal() {
    this.isModalVisible = !this.isModalVisible;
  }
  
}
