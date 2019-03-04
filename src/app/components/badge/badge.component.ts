import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: `
    <button [class]="type">
      <h3 *ngIf="value">{{ value }}</h3>
    </button>
  `,
  styleUrls: ['badge.component.scss']
})
export class BadgeComponent {
  @Input() type: string;
  @Input() value: number;
}
