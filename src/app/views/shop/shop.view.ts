import { Component } from '@angular/core';
import { GameState } from '@app/game.state';
import { Item, Player } from '@app/models';
import { PlayerState } from '@app/player.state';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

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
  @Select(GameState.shopItems) shopItems$: Observable<Item[]>;
  @Select(PlayerState.items) playerItems$: Observable<Item[]>;
  @Select(PlayerState.openItemSlots) playerOpenItemSlots: Observable<number>;
  @Select(PlayerState.stats) playerStats$: Observable<Partial<Player>>;

  @Emitter(GameState.removeShopItem) removeShopItem: Emittable<number>;
  @Emitter(PlayerState.addItem) addPlayerItem: Emittable<number>;
  @Emitter(PlayerState.removeGold) removePlayerGold: Emittable<number>;

  shopItemClick(item: Item) {
    this.removeShopItem.emit(item.id);
    this.addPlayerItem.emit(item.id);
    this.removePlayerGold.emit(item.value);
  }
}
