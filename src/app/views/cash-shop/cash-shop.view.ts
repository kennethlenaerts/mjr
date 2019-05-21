import { Type } from "@app/types";
import { Component, OnInit } from "@angular/core";

@Component({
  template: `
    <!--
    <app-dialog title="Cash Shop">
      <app-inventory
        [items]="items"
        [big]="true"
        [type]="TypeEnum.cashShop"
      ></app-inventory>
    </app-dialog>
    -->
  `,
  styleUrls: ["cash-shop.view.scss"],
})
export class CashShopView implements OnInit {
  public items: string[];
  public TypeEnum: typeof Type = Type;

  ngOnInit() {
    this.items = [
      "coin_01",
      "coin_02",
      "coin_03",
      "soulgem_01",
      "soulgem_02",
      "soulgem_03",
    ];
  }
}
