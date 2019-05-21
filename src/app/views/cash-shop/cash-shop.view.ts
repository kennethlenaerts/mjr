import { PlayerState } from "./../../player.state";
import { Type } from "@app/types";
import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { GameState } from "@app/game.state";
import { Observable } from "rxjs";
import { Item } from "@app/models";
import { Emitter, Emittable } from "@ngxs-labs/emitter";

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
  public items: string[];
  public TypeEnum: typeof Type = Type;

  @Select(GameState.cashShopItems)
  public cashShopItems$: Observable<Item[]>;

  @Emitter(PlayerState.addGold)
  public playerAddGold: Emittable<number>;

  @Emitter(PlayerState.removeGem)
  public playerRemoveGem: Emittable<number>;

  public shopItemClick(item: Item) {
    this.playerAddGold.emit(item.worth);
    this.playerRemoveGem.emit(item.value);
  }
}
