import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <main>
      <div class="content">
        <img src="assets/logo.png" />
        <button class="start"></button>
      </div>
    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {}
