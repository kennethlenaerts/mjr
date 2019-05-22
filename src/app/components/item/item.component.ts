import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Item, Type } from '@app/models';

@Component({
  selector: "app-item",
  template: `
    <img
      [src]="item.src"
      [ngClass]="{ big: type === TypeEnum.cashShop, isShop: isShop }"
      (click)="itemClick.emit(item)"
    />

    <app-button
      *ngIf="isShop"
      [type]="type"
      [value]="item.value"
      [icon]="icon"
      (buttonClick)="buttonClick.emit(item)"
    ></app-button>
  `,
  styleUrls: ["item.component.scss"],
})
export class ItemComponent implements OnInit {
  isShop: boolean = false;
  TypeEnum: typeof Type = Type;

  @Input() item: Item;
  @Input() type: Type = Type.inventory;
  @Input() icon: string;
  @Output() itemClick: EventEmitter<Item> = new EventEmitter();
  @Output() buttonClick: EventEmitter<Item> = new EventEmitter();

  @HostBinding("class.big") big: boolean;

  ngOnInit() {
    this.big = this.type === this.TypeEnum.cashShop;
    this.isShop = this.type === Type.cashShop || this.type === Type.shop;
  }
}
