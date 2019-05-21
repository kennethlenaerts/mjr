import { Emittable } from "@ngxs-labs/emitter";
import { Component } from "@angular/core";
import { Type } from "@app/types";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { PlayerState } from "@app/player.state";
import { Item, Player } from "@app/models";
import { GameState } from "@app/game.state";
import { Emitter } from "@ngxs-labs/emitter";

@Component({
  template: `
    <app-dialog title="Shop">
      <app-shop
        [items]="shopItems$ | async"
        (buttonClick)="shopItemClick($event)"
      ></app-shop>
    </app-dialog>

    <app-dialog title="inventory">
      <app-inventory
        [items]="playerItems$ | async"
        [openItemSlots]="playerOpenItemSlots | async"
        [maxItemSlots]="(playerStats$ | async)?.maxItemSlots"
      ></app-inventory>
    </app-dialog>
  `,
  styleUrls: ["shop.view.scss"],
})
export class ShopView {
  // public TypeEnum: typeof Type = Type;

  @Select(PlayerState.stats)
  public playerStats$: Observable<Partial<Player>>;

  @Select(PlayerState.items)
  public playerItems$: Observable<Item[]>;

  @Select(GameState.shopItems)
  public shopItems$: Observable<Item[]>;

  @Select(PlayerState.openItemSlots)
  public playerOpenItemSlots: Observable<number>;

  @Emitter(GameState.removeShopItem)
  public removeShopItem: Emittable<number>;

  @Emitter(PlayerState.addItem)
  public addPlayerItem: Emittable<number>;

  @Emitter(PlayerState.removeGold)
  public removePlayerGold: Emittable<number>;

  public shopItemClick(item: Item) {
    this.removeShopItem.emit(item.id);
    this.addPlayerItem.emit(item.id);
    this.removePlayerGold.emit(item.value);
  }
}
