import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: `
    <button [class]="type">
      <h3 *ngIf="count">{{ count }}</h3>
    </button>
  `,
  styleUrls: ['badge.component.scss']
})
export class BadgeComponent {
  @Input() type: string;
  @Input() count: number;
}
