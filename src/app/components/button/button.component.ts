import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="menu">
      <app-badge *ngIf="badge" [type]="badge" [count]="count"></app-badge>
      <img [src]="'assets/icons/common_icon_' + icon + '.png'" />
    </button>
  `,
  styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() icon: string;
  @Input() badge: string;
  @Input() count: string;

  constructor() {}

  ngOnInit() {}
}
