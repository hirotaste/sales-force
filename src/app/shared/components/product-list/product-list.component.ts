import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductItem } from '../../models/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductItemComponent
  ],
  template: `
    <div class="panel">
      <h2 *ngIf="title()">{{ title() }}</h2>
      <div class="product-list">
        <app-product-item *ngFor="let item of listOfProducts()" [productItem]="item"></app-product-item>
      </div>
    </div>
  `,
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  title = signal('');
  @Input() set panelTitle(val: string) {
    this.title.set(val);
  }

  listOfProducts = signal<ProductItem[]>([]);
  @Input() set productList(products: ProductItem[]) {
    this.listOfProducts.set(products);
  }

}
