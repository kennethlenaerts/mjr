import { Component } from '@angular/core';
import { GameState } from '@app/game.state';
import { Item, Type } from '@app/models';
import { PlayerState } from '@app/player.state';
import { Emittable, Emitter } from '@ngxs-labs/emitter';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  template: `
    <app-dialog title="Cash Shop">
      <app-shop
        [items]="cashShopItems$ | async"
        [type]="TypeEnum.cashShop"
        (buttonClick)="shopItemClick($event)"
      ></app-shop>
    </app-dialog>
  `,
  styleUrls: ["cash-shop.view.scss"],
})
export class CashShopView {
  items: string[];
  TypeEnum: typeof Type = Type;

  @Select(GameState.cashShopItems) cashShopItems$: Observable<Item[]>;

  @Emitter(PlayerState.addGold) playerAddGold: Emittable<number>;
  @Emitter(PlayerState.removeGem) playerRemoveGem: Emittable<number>;

  shopItemClick(item: Item): void {
    this.playerAddGold.emit(item.worth);
    this.playerRemoveGem.emit(item.value);
  }
}
