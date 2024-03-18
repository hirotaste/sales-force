import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent],
  template: `
    <app-toolbar></app-toolbar>
  `,
  styles: [],
})
export class AppComponent {
  title = 'sales';
}
