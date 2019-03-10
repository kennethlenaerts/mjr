import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-dialog title="Info">
      <div class="content">
        <app-inventory title="Inventory" [items]="items"></app-inventory>
      </div>
    </app-dialog>
  `,
  styleUrls: ['info.view.scss']
})
export class InfoView implements OnInit {
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
