import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: `
    <button [class]="type">
      <h2 *ngIf="value" class="badge">{{ value }}</h2>
    </button>
  `,
  styleUrls: ['badge.component.scss']
})
export class BadgeComponent {
  @Input() type: string;
  @Input() value: number;
}
