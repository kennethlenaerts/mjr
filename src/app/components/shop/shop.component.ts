import { Type } from "@app/types";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "@app/models";

@Component({
  selector: "app-shop",
  template: `
    <div class="items">
      <app-item
        *ngFor="let item of items"
        [item]="item"
        [type]="type"
        (itemClick)="itemClick.emit($event)"
      ></app-item>
    </div>
  `,
  styleUrls: ["shop.component.scss"],
})
export class ShopComponent {
  public TypeEnum: typeof Type = Type;

  @Input() public title: string = "Inventory";
  @Input() public type: Type = Type.inventory;
  @Input() public items: Item[];
  @Input() public openItemSlots: number;
  @Output() itemClick: EventEmitter<Item> = new EventEmitter();
}
