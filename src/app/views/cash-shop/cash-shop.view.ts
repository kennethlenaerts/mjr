import { Component } from '@angular/core';
import { Item, Type } from '@app/models';
import { AddPlayerGold, RemovePlayerGem, selectCashShopItems, State } from '@app/state';
import { Store } from '@ngrx/store';
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

  cashShopItems$: Observable<Item[]>;

  constructor(private _store: Store<State>) {
    this.cashShopItems$ = _store.select(selectCashShopItems);
  }

  shopItemClick(item: Item): void {
    this._store.dispatch(new AddPlayerGold(item.worth));
    this._store.dispatch(new RemovePlayerGem(item.value));
  }
}
