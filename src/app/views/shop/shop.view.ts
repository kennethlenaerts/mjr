import { Component, OnInit } from "@angular/core";
import { Type } from "@app/types";

@Component({
  template: `
    <!--
    <app-dialog title="Shop">
      <app-inventory
        title="Buy"
        [items]="buyItems"
        [type]="TypeEnum.shop"
      ></app-inventory>
    </app-dialog>

    <app-dialog title="inventory">
      <app-inventory
        title="Sell"
        [items]="inventory"
        [type]="TypeEnum.shop"
      ></app-inventory>
    </app-dialog>
    -->
  `,
  styleUrls: ["shop.view.scss"],
})
export class ShopView implements OnInit {
  public buyItems: string[];
  public inventory: string[];
  public TypeEnum: typeof Type = Type;

  ngOnInit() {
    this.buyItems = [
      "candle",
      "chicken",
      "lucky",
      "shield_A",
      "sword_B",
      "potion_red",
    ];

    this.inventory = ["anvil", "arrow"];
  }
}
