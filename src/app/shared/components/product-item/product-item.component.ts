import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ProductItem } from '../../models/product-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
  ],
  template: `
    <div class="product-item">
      <div class="card-header">
        <div mat-card-avatar class="header-image"></div>
        <h3 class="product-title">{{ productItem?.title }}</h3>
      </div>
      <div class="product-image">
        <img [src]="productItem?.imageUrl" [alt]="productItem?.title">
        <div *ngIf="productItem?.promotion" class="tag-promotion">20% OFF</div>
        <div *ngIf="productItem?.popular" class="tag-popular" matTooltip="Popular">
          <mat-icon aria-hidden="false" aria-label="Popular">star</mat-icon>
        </div>
      </div>
      <div class="product-price">
        {{ productItem?.price | currency:'BRL' }}
      </div>
      <div class="product-buttons">
        <button mat-raised-button (click)="buyNow(productItem)" class="buy-now-button">
          Comprar
        </button>
        <button mat-raised-button color="warn" matTooltip="Adicionar ao carrinho" class="add-to-cart-button" (click)="addToCart(productItem)">
          <mat-icon aria-hidden="false" aria-label="Adicionar ao carrinho" [style.display]="'contents'">add_shopping_cart</mat-icon>
        </button>
      </div>
    </div>
  `,
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() productItem: ProductItem | null = null;

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  addToCart(item: ProductItem | null): void {
    this.snackBar.open(`Item ${item?.title} adicionado ao carrinho.`, 'Fechar', {
      duration: 3000
    });
  }

  buyNow(item: ProductItem | null): void {
    if (item?.id) {
      this.router.navigate(['/products', item.id]);
    }
  }
}
