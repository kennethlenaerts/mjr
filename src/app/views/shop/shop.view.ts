import { Component } from "@angular/core";
import { Type } from "@app/types";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { PlayerState } from "@app/player.state";
import { Item } from "@app/models";
import { GameState } from "@app/game.state";

@Component({
  template: `
    <app-dialog title="Shop">
      <app-shop
        [items]="shopItems$ | async"
        (itemClick)="shopItemClick($event)"
      ></app-shop>
    </app-dialog>

    <app-dialog title="inventory">
      <app-inventory
        [items]="playerItems$ | async"
        [openItemSlots]="playerOpenItemSlots | async"
        (itemClick)="inventoryItemClick($event)"
      ></app-inventory>
    </app-dialog>
  `,
  styleUrls: ["shop.view.scss"],
})
export class ShopView {
  // public TypeEnum: typeof Type = Type;

  @Select(PlayerState.items)
  public playerItems$: Observable<Item[]>;

  @Select(GameState.shopItems)
  public shopItems$: Observable<Item[]>;

  @Select(PlayerState.openItemSlots)
  public playerOpenItemSlots: Observable<number>;

  public inventoryItemClick(item: Item) {
    console.log(item);
  }

  public shopItemClick(item: Item) {
    console.log(item);
  }
}
