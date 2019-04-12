import { Component, OnInit, Input } from "@angular/core";
import { Type } from "@app/types";

@Component({
  selector: "app-item",
  template: `
    <img [src]="this.imgSrc + item + '.png'" [ngClass]="{ big: big }" />

    <app-button
      *ngIf="isShopView"
      [type]="type"
      [value]="'100'"
      [icon]="icon"
    ></app-button>
  `,
  styleUrls: ["item.component.scss"],
})
export class ItemComponent implements OnInit {
  @Input() item: string;
  @Input() big: boolean = false;
  @Input() type: Type = Type.inventory;
  @Input() icon: string;
  public imgSrc: string = "assets/icons/common_icon_";
  public isShopView: boolean = false;

  ngOnInit() {
    if (this.type === Type.cashShop) this.imgSrc = "assets/icons/shop_img_";
    if (this.type === Type.cashShop || this.type === Type.shop)
      this.isShopView = true;

    console.log(this.icon);
  }
}
