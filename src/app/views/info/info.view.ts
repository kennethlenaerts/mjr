import { Component } from '@angular/core';
import { Item, ItemType, Player } from '@app/models';
import { PlayerState } from '@app/player.state';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  template: `
    <app-dialog title="Info">
      <div class="content">
        <app-user-stats [playerStats]="playerStats$ | async"></app-user-stats>
        <app-inventory
          [items]="playerItems$ | async"
          [openItemSlots]="playerOpenItemSlots | async"
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

  @Select(PlayerState.items) playerItems$: Observable<Item[]>;
  @Select(PlayerState.openItemSlots) playerOpenItemSlots: Observable<number>;
  @Select(PlayerState.stats) playerStats$: Observable<Partial<Player>>;

  @Emitter(PlayerState.removeItem) removePlayerItem: Emittable<number>;
  @Emitter(PlayerState.updateHealth) updatePlayerHealth: Emittable<number>;

  itemClick(item: Item): void {
    if (item.type == this.ItemTypeEnum.health) {
      this.updatePlayerHealth.emit(item.healthPoints);
      this.removePlayerItem.emit(item.id);
    }
  }
}
