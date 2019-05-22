import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item, Type } from '@app/models';

@Component({
  selector: "app-inventory",
  template: `
    <div class="amount">
      <h3 class="title">{{ title }}</h3>
      <h3 class="total">{{ items.length }} / {{ maxItemSlots }}</h3>
      <app-divider class="divider"></app-divider>
    </div>

    <div class="items">
      <app-item
        *ngFor="let item of items"
        [item]="item"
        [type]="type"
        (itemClick)="itemClick.emit($event)"
      ></app-item>

      <app-button
        *ngFor="let number of ' '.repeat(openItemSlots).split('')"
        [type]="TypeEnum.inventory"
        icon="item-add"
      ></app-button>

      <app-button
        *ngFor="let number of [1, 2, 3, 4, 5]"
        [type]="TypeEnum.inventory"
        icon="item-lock"
      ></app-button>
    </div>
  `,
  styleUrls: ["inventory.component.scss"],
})
export class InventoryComponent {
  TypeEnum: typeof Type = Type;

  @Input() title: string = "Inventory";
  @Input() type: Type = Type.inventory;
  @Input() items: Item[];
  @Input() openItemSlots: number;
  @Input() maxItemSlots: number;
  @Output() itemClick: EventEmitter<Item> = new EventEmitter();
}
