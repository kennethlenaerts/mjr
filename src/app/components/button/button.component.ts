import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button *ngIf="type === 'menu'" class="menu" [ngClass]="{ active: active }">
      <app-badge *ngIf="badge" [type]="badge" [value]="value"></app-badge>
      <img [src]="'assets/icons/common_icon_' + icon + '.png'" />
    </button>

    <button *ngIf="type === 'add'" class="add"></button>

    <button
      *ngIf="type === 'inventory'"
      [class]="'inventory' + ' ' + icon"
    ></button>
  `,
  styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() icon: string;
  @Input() badge: string;
  @Input() value: string;
  @Input() active: boolean;

  constructor() {}

  ngOnInit() {}
}
