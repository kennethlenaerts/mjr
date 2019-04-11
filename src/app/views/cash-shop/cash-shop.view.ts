import { Type } from "@app/types";
import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <app-dialog title="Cash Shop">
      <app-inventory
        [items]="items"
        [shop]="true"
        [big]="true"
        [type]="TypeEnum.cashShop"
      ></app-inventory>
    </app-dialog>
  `,
  styleUrls: ["cash-shop.view.scss"],
})
export class CashShopView implements OnInit {
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
