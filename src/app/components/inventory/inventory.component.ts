import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
    <div class="amount">
      <h3>Inventory</h3>
      <h3 class="total">12 / 20</h3>
      <app-divider></app-divider>
    </div>

    <div class="items">
      <app-item *ngFor="let item of items" [icon]="item"></app-item>

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
    </div>
  `,
  styleUrls: ['inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  @Input() public items: string[];
  ngOnInit() {}
}
