import { Component } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-menu-button',
  template: `
    <button [ngClass]="{ active: active }">
      <app-badge *ngIf="badge" [type]="badge" [value]="value"></app-badge>
      <img [src]="'assets/icons/common_icon_' + icon + '.png'" />
    </button>
  `,
  styleUrls: ['button.component.scss', 'menu-button.component.scss']
})
export class MenuButtonComponent extends ButtonComponent {}
