import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav id="menu">
      <app-button [icon]="'treasure'"></app-button>
      <app-button [icon]="'shop'"></app-button>
      <app-button [icon]="'envelope'"></app-button>
      <app-button [icon]="'mission'"></app-button>
      <app-button [icon]="'trophy'"></app-button>
      <app-button [icon]="'setting'"></app-button>
    </nav>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {}
