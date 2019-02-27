import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-button [icon]="'treasure'"></app-button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'game';
}
