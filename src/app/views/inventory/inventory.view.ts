import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-dialog title="Inventory">
      <div class="content">
        <div class="amount">
          <h3>Inventory</h3>
          <h3 class="total">12 / 20</h3>
        </div>

        <div class="items">
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
          <app-item icon="sword_A"></app-item>
        </div>
      </div>
    </app-dialog>
  `,
  styleUrls: ['inventory.view.scss']
})
export class InventoryView implements OnInit {
  ngOnInit() {}
}
