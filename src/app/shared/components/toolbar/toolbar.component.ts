import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SidenavComponent } from '../sidenav/sidenav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    SidenavComponent
  ],
  template: `
    <mat-sidenav-container>
        <mat-sidenav #sidenav mode="side" opened class="sidenav">
          <app-sidenav />
        </mat-sidenav>

        <mat-sidenav-content class="content">
          <router-outlet />
        </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
}
