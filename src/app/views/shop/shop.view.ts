import { Component } from "@angular/core";
import { Type } from "@app/types";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { PlayerState } from "@app/player.state";
import { Item } from "@app/models";

@Component({
  template: `
    <app-dialog title="Shop">
      <app-shop></app-shop>
    </app-dialog>

    <app-dialog title="inventory">
      <app-inventory
        [items]="playerItems$ | async"
        [openItemSlots]="playerOpenItemSlots | async"
        (itemClick)="itemClick($event)"
      ></app-inventory>
    </app-dialog>
  `,
  styleUrls: ["shop.view.scss"],
})
export class ShopView {
  // public TypeEnum: typeof Type = Type;

  @Select(PlayerState.items)
  public playerItems$: Observable<Item[]>;

  @Select(PlayerState.openItemSlots)
  public playerOpenItemSlots: Observable<number>;

  public itemClick(item: Item) {
    console.log(item);
  }
}
