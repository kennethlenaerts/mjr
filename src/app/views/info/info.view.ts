import { Component } from '@angular/core';
import { Item, ItemType, Player } from '@app/models';
import {
  RemovePlayerItem,
  selectPlayerItems,
  selectPlayerOpenItemSlots,
  selectPlayerStats,
  State,
  UpdatePlayerHealth,
} from '@app/state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  template: `
    <app-dialog title="Info">
      <div class="content">
        <app-user-stats [playerStats]="playerStats$ | async"></app-user-stats>
        <app-inventory
          [items]="playerItems$ | async"
          [openItemSlots]="playerOpenItemSlots$ | async"
          [maxItemSlots]="(playerStats$ | async)?.maxItemSlots"
          (itemClick)="itemClick($event)"
        ></app-inventory>
      </div>
    </app-dialog>
  `,
  styleUrls: ["info.view.scss"],
})
export class InfoView {
  ItemTypeEnum: typeof ItemType = ItemType;

  playerItems$: Observable<Item[]>;
  playerOpenItemSlots$: Observable<number>;
  playerStats$: Observable<Partial<Player>>;

  constructor(private _store: Store<State>) {
    this.playerItems$ = _store.select(selectPlayerItems);
    this.playerOpenItemSlots$ = _store.select(selectPlayerOpenItemSlots);
    this.playerStats$ = _store.select(selectPlayerStats);
  }

  itemClick(item: Item): void {
    if (item.type == this.ItemTypeEnum.health) {
      this._store.dispatch(new UpdatePlayerHealth(item.healthPoints));
      this._store.dispatch(new RemovePlayerItem(item.id));
    }
  }
}
