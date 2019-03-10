import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-dialog title="Shop"></app-dialog>
    <app-dialog title="inventory"></app-dialog>
  `,
  styleUrls: ['shop.view.scss']
})
export class ShopView implements OnInit {
  ngOnInit() {}
}
