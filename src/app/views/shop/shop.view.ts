import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-dialog title="Shop">
      <app-inventory title="Buy" [items]="items" [shop]="true"></app-inventory>
    </app-dialog>
    <app-dialog title="inventory">
      <app-inventory title="Sell" [items]="items" [shop]="true"></app-inventory>
    </app-dialog>
  `,
  styleUrls: ['shop.view.scss']
})
export class ShopView implements OnInit {
  public items: string[];

  ngOnInit() {
    this.items = [
      'anvil',
      'arrow',
      'candle',
      'chicken',
      'lucky',
      'shield_A',
      'sword_B',
      'potion_red'
    ];
  }
}
