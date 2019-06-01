import { Component } from '@angular/core';
import { Item, Player } from '@app/models';
import {
  AddPlayerItem,
  RemovePlayerGold,
  RemoveShopItem,
  selectPlayerItems,
  selectPlayerOpenItemSlots,
  selectPlayerStats,
  selectShopItems,
  State,
} from '@app/state';
import { Store } from '@ngrx/store';
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
        [openItemSlots]="playerOpenItemSlots$ | async"
        [maxItemSlots]="(playerStats$ | async)?.maxItemSlots"
      ></app-inventory>
    </app-dialog>
  `,
  styleUrls: ["shop.view.scss"],
})
export class ShopView {
  shopItems$: Observable<Item[]>;
  playerItems$: Observable<Item[]>;
  playerOpenItemSlots$: Observable<number>;
  playerStats$: Observable<Partial<Player>>;

  constructor(private _store: Store<State>) {
    this.shopItems$ = _store.select(selectShopItems);
    this.playerItems$ = _store.select(selectPlayerItems);
    this.playerOpenItemSlots$ = _store.select(selectPlayerOpenItemSlots);
    this.playerStats$ = _store.select(selectPlayerStats);
  }

  shopItemClick(item: Item) {
    this._store.dispatch(new RemoveShopItem(item.id));
    this._store.dispatch(new AddPlayerItem(item.id));
    this._store.dispatch(new RemovePlayerGold(item.value));
  }
}
