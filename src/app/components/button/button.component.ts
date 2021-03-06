import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Type } from '@app/models';

@Component({
  selector: "app-button",
  template: `
    <button *ngIf="type === TypeEnum.status" class="add"></button>

    <button
      *ngIf="type === TypeEnum.inventory"
      [class]="'inventory' + ' ' + icon"
    ></button>

    <a
      *ngIf="isShop || isCashShop"
      (click)="buttonClick.emit()"
      class="shop"
      [ngClass]="{ cash: isCashShop, gem: isCashShop }"
    >
      <img *ngIf="isShop" [src]="'assets/icons/common_icon_gold.png'" />
      <img *ngIf="isCashShop" [src]="'assets/icons/common_icon_gem.png'" />
      <h3>{{ value }}</h3>
    </a>
  `,
  styleUrls: ["button.component.scss"],
})
export class ButtonComponent implements OnInit {
  TypeEnum: typeof Type = Type;
  isShop: boolean = false;
  isCashShop: boolean = false;

  @Input() type: Type;
  @Input() icon: string;
  @Input() badge: string;
  @Input() value: string;
  @Input() active: boolean;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    this.isCashShop = this.type === this.TypeEnum.cashShop;
    this.isShop = this.type === this.TypeEnum.shop;
  }
}
