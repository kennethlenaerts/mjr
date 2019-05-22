import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Type, Item } from "@app/models";

@Component({
  selector: "app-shop",
  template: `
    <div class="items" [ngClass]="{ big: type === TypeEnum.cashShop }">
      <app-item
        *ngFor="let item of items"
        [item]="item"
        [type]="type"
        (buttonClick)="buttonClick.emit($event)"
      ></app-item>
    </div>
  `,
  styleUrls: ["shop.component.scss"],
})
export class ShopComponent {
  public TypeEnum: typeof Type = Type;

  @Input() public type: Type = Type.shop;
  @Input() public items: Item[];
  @Output() buttonClick: EventEmitter<Item> = new EventEmitter();
}
