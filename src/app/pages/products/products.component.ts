import { Component, Input, signal } from '@angular/core';

import { ProductItem } from '../../shared/models/product-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <div class="product-details">
      <div class="product-info">
        <h2>{{ product().title }}</h2>
        <p>Preço: {{ product().price | currency:'BRL' }}</p>
        <div class="expanded-image">
          <img [src]="actualImage()" alt="Imagem">
        </div>
        <div class="image-gallery">
          <img src="../../../assets/nb-samsung1.png" alt="Imagem 1" (click)="expandImage('../../../assets/nb-samsung1.png')">
          <img src="../../../assets/nb-samsung2.png" alt="Imagem 2" (click)="expandImage('../../../assets/nb-samsung2.png')">
          <img src="../../../assets/nb-samsung3.png" alt="Imagem 3" (click)="expandImage('../../../assets/nb-samsung3.png')">
        </div>
        <p>{{ product().description }}</p>

        <button (click)="addToCart(product())">Adicionar ao Carrinho</button>
        <button (click)="requestQuote(product())">Solicitar Orçamento</button>
      </div>
    </div>
  `,
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  actualImage = signal<string>('../../../assets/nb-samsung1.png');
  product = signal<ProductItem>(
    {
      id:1,
      title: "Notebook Samsung Core i5",
      price: 2944.99,
      description: "O notebook Samsung Book possui uma arquitetura de última geração e design elegante para quem busca qualidade, desempenho e proteção do investimento. Conta com portas de acesso à memória e unidade de armazenamento, facilitando o upgrade e proporcionando mais longevidade ao sistema. O Samsung Book traz uma configuração potente para as tarefas diárias, com processador Core i5 de décima primeira geração, 8GB de memória RAM e armazenamento de 256GB SSD. O Samsung Book atende aos mais diversos perfis de utilização, seja para estudo, trabalho ou uso geral.",
      category: "eletronic",
      imageUrl: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      promotion: true,
      popular: true
   }
  );
  @Input() set viewProduct(prod: ProductItem) {
    this.product.set(prod);
  }

  expandImage(imageUrl: string) {
    this.actualImage.set(imageUrl);
  }
  addToCart(product: ProductItem) {}
  requestQuote(product: ProductItem) {}
}
