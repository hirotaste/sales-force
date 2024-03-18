import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { Order } from '../../shared/models/order';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule
  ],
  template: `
    <div class="order-tracking-page">
      <h2>Lista de Pedidos</h2>

      <div class="filter-buttons">
        <button mat-raised-button color="primary" (click)="filterOrders('all')">Todos</button>
        <button mat-raised-button class="button-completed" (click)="filterOrders('Concluído')">Concluídos</button>
        <button mat-raised-button class="button-progress" (click)="filterOrders('Em Andamento')">Em Andamento</button>
        <button mat-raised-button color="warn" (click)="filterOrders('Cancelado')">Cancelado</button>
      </div>

      <table mat-table [dataSource]="filteredOrders" class="mat-elevation-z8">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef> Pedido </th>
          <td mat-cell *matCellDef="let element"> {{element.id}} </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef> Cliente </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef> Situação </th>
          <td mat-cell *matCellDef="let element">
            <div class="pill" [ngClass]="{
              'pill-red': element.status === 'Cancelado',
              'pill-yellow': element.status === 'Em Andamento',
              'pill-green': element.status === 'Concluído'
            }">
              {{element.status}}
            </div>
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="date">
          <th mat-header-cell *matHeaderCellDef> Atualizado em </th>
          <td mat-cell *matCellDef="let element"> {{element.date | date: 'dd/MM/yyyy'}} </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

    </div>
  `,
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  displayedColumns: string[] = ['id', 'name', 'status', 'date'];
  orders: Order[] = [
    { id: 1, name: 'Antonio Carlos', status: 'Concluído', date: new Date('2024-03-20') },
    { id: 2, name: 'Jose Aparecido', status: 'Em Andamento', date: new Date('2024-03-18') },
    { id: 3, name: 'Manoela Garcia', status: 'Concluído', date: new Date('2024-03-15') },
    { id: 4, name: 'Silvio Andrade', status: 'Cancelado', date: new Date('2024-03-12') },
    { id: 5, name: 'Ana Almeida', status: 'Em Andamento', date: new Date('2024-03-10') },
    { id: 6, name: 'Marcela Lacerda', status: 'Concluído', date: new Date('2024-03-08') },
  ];

  filteredOrders: Order[] = this.orders;

  filterOrders(status: string): void {
    if (status === 'all') {
      this.filteredOrders = this.orders;
    } else {
      this.filteredOrders = this.orders.filter(order => order.status === status);
    }
  }
}
