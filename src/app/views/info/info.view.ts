import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Player, Item, ItemType } from "@app/models";
import { PlayerState } from "@app/player.state";
import { Emitter, Emittable } from "@ngxs-labs/emitter";

@Component({
  template: `
    <app-dialog title="Info">
      <div class="content">
        <app-user-stats [playerStats]="playerStats$ | async"></app-user-stats>
        <app-inventory
          [items]="playerItems$ | async"
          [openItemSlots]="playerOpenItemSlots | async"
          (itemClick)="itemClick($event)"
        ></app-inventory>
      </div>
    </app-dialog>
  `,
  styleUrls: ["info.view.scss"],
})
export class InfoView {
  @Select(PlayerState.stats)
  public playerStats$: Observable<Partial<Player>>;

  @Select(PlayerState.items)
  public playerItems$: Observable<Item[]>;

  @Select(PlayerState.openItemSlots)
  public playerOpenItemSlots: Observable<number>;

  @Emitter(PlayerState.updateHealth)
  public updatePlayerHealth: Emittable<number>;

  @Emitter(PlayerState.removeItem)
  public removePlayerItem: Emittable<number>;

  public ItemTypeEnum: typeof ItemType = ItemType;

  public itemClick(item: Item) {
    if (item.type == this.ItemTypeEnum.health) {
      this.updatePlayerHealth.emit(item.healthPoints);
      this.removePlayerItem.emit(item.id);
    }
  }
}
