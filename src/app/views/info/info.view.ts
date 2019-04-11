import { Component, OnInit } from "@angular/core";
import { Type } from "@app/types";

@Component({
  template: `
    <app-dialog title="Info">
      <div class="content">
        <app-user-stats></app-user-stats>
        <app-inventory
          title="Inventory"
          [items]="items"
          [type]="TypeEnum.inventory"
        ></app-inventory>
      </div>
    </app-dialog>
  `,
  styleUrls: ["info.view.scss"],
})
export class InfoView implements OnInit {
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
