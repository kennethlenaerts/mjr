import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-dialog></app-dialog>
    <app-dialog></app-dialog>
  `,
  styleUrls: ['shop.view.scss']
})
export class ShopView implements OnInit {
  ngOnInit() {}
}
