import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item, Type } from '@app/models';

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
  TypeEnum: typeof Type = Type;

  @Input() type: Type = Type.shop;
  @Input() items: Item[];
  @Output() buttonClick: EventEmitter<Item> = new EventEmitter();
}
