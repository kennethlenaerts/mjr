import { Component, OnInit } from "@angular/core";
import { Type } from "@app/types";

@Component({
  template: `
    <app-dialog title="Shop">
      <app-inventory
        title="Buy"
        [items]="items"
        [shop]="true"
        [type]="TypeEnum.shop"
      ></app-inventory>
    </app-dialog>
    <app-dialog title="inventory">
      <app-inventory
        title="Sell"
        [items]="items"
        [shop]="true"
        [type]="TypeEnum.shop"
      ></app-inventory>
    </app-dialog>
  `,
  styleUrls: ["shop.view.scss"],
})
export class ShopView implements OnInit {
  public items: string[];
  public TypeEnum: typeof Type = Type;

  ngOnInit() {
    this.items = [
      "anvil",
      "arrow",
      "candle",
      "chicken",
      "lucky",
      "shield_A",
      "sword_B",
      "potion_red",
    ];
  }
}
