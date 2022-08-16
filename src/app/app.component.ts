import {
  Component,
  EventEmitter
} from '@angular/core';

import { Product } from './product.model';

/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'SHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'JACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        153.99),
      new Product(
        'JEANS',
        'Blue Jeans',
        '/assets/images/products/jeans.jpeg',
        ['Women', 'Apparel', 'Jeans'],
        47.99),
      new Product(
        'CAP',
        'A Nice Black Cap',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Caps'],
        19.99),
      new Product(
        'T-Shirt',
        'Eco friendly t-shirt',
        '/assets/images/products/orange-t-shirt.jpg',
        ['Men', 'Apparel', 'T-Shirt'],
        29.99)
      ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
