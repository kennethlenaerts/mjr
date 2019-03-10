import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
    <div class="amount" [ngClass]="{ shop: shop }">
      <h3 class="title">{{ title }}</h3>
      <h3 class="total" *ngIf="!shop">12 / 20</h3>
      <app-divider class="divider"></app-divider>
    </div>

    <div class="items">
      <app-item
        *ngFor="let item of items"
        [icon]="item"
        [shop]="shop"
      ></app-item>

      <ng-container *ngIf="!shop">
        <app-button
          *ngFor="let number of [1, 2, 3, 4, 5]"
          type="inventory"
          icon="item-add"
        ></app-button>

        <app-button
          *ngFor="let number of [1, 2, 3, 4, 5]"
          type="inventory"
          icon="item-lock"
        ></app-button>
      </ng-container>
    </div>
  `,
  styleUrls: ['inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() public title: string;
  @Input() public items: string[];
  @Input() public shop: boolean = false;
  ngOnInit() {}
}
