import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-user-stats></app-user-stats>
      <div class="status">
        <app-status-frame icon="heart"></app-status-frame>
        <app-status-frame icon="gold"></app-status-frame>
        <app-status-frame icon="gem"></app-status-frame>
      </div>
    </header>

    <main>
      <div class="content">
        <img src="assets/logo.png" />
        <button class="start"></button>
      </div>
    </main>

    <nav>
      <app-button icon="treasure"></app-button>
      <app-button icon="shop"></app-button>
      <app-button icon="envelope"></app-button>
      <app-button icon="mission"></app-button>
      <app-button icon="trophy"></app-button>
      <app-button icon="setting"></app-button>
    </nav>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {}
