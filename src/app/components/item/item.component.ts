import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <img
      [src]="'assets/icons/common_icon_' + icon + '.png'"
      [ngClass]="{ big: big }"
    />

    <app-button
      *ngIf="shop"
      type="shop"
      [value]="'100'"
      [icon]="'gold'"
    ></app-button>
  `,
  styleUrls: ['item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() icon: string;
  @Input() shop: boolean = false;
  @Input() big: boolean = false;
  ngOnInit() {}
}
