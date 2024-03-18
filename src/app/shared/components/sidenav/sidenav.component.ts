import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';

import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    RouterLink
  ],
  template: `
    <div class="sidenav-header">
      <img src="/assets/salesforce-logo.png" />
      <div class="header-text">
        <h2 class="app-name">SalesForce</h2>
        <p>Antônio Silva</p>
      </div>
    </div>
    <mat-nav-list>
      <a mat-list-item *ngFor="let item of menuItems()" [routerLink]="item.route"
        routerLinkActive>
          <mat-icon matListItemIcon *ngIf="item.label != 'Pedidos'">{{ item.icon }}</mat-icon>
          <mat-icon matListItemIcon *ngIf="item.label == 'Pedidos'" matBadge="3" matBadgeColor="warn">{{ item.icon }}</mat-icon>
          <span matListItemTitle class="item-label">
            {{ item.label }}
          </span>
      </a>
    </mat-nav-list>
  `,
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Home',
      route: ''
    },
    {
      icon: 'inventory',
      label: 'Produtos',
      route: 'products'
    },
    {
      icon: 'shopping_cart',
      label: 'Pedidos',
      route: 'orders'
    }
  ]);
}
