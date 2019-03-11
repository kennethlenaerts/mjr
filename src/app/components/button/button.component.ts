import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button *ngIf="type === 'add'" class="add"></button>

    <button
      *ngIf="type === 'inventory'"
      [class]="'inventory' + ' ' + icon"
    ></button>

    <a *ngIf="type === 'shop'" class="shop">
      <img [src]="'assets/icons/common_icon_' + icon + '.png'" />
      <h3>{{ value }}</h3>
    </a>
  `,
  styleUrls: ['button.component.scss']
})
export class ButtonComponent {
  @Input() type: string;
  @Input() icon: string;
  @Input() badge: string;
  @Input() value: string;
  @Input() active: boolean;
}
