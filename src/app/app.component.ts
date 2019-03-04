import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-user-stats></app-user-stats>
      <div class="status">
        <app-status-frame icon="heart" value="50"></app-status-frame>
        <app-status-frame icon="gold" value="150"></app-status-frame>
        <app-status-frame icon="gem" value="0"></app-status-frame>
      </div>
    </header>

    <main>
      <div class="content">
        <img src="assets/logo.png" />
        <button class="start"></button>
      </div>
    </main>

    <nav>
      <app-button type="menu" icon="treasure"></app-button>
      <app-button type="menu" icon="shop" badge="new"></app-button>
      <app-button
        type="menu"
        icon="envelope"
        badge="count"
        count="5"
      ></app-button>
      <app-button type="menu" icon="mission" badge="alert"></app-button>
      <app-button type="menu" icon="trophy"></app-button>
      <app-button type="menu" icon="setting"></app-button>
    </nav>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {}
