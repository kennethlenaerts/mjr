import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <main>
      <app-start></app-start>
    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {}
