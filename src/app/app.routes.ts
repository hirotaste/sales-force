import { Routes } from '@angular/router';

import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  { path: 'products', component: HomeComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
];
