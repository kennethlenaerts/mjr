import { Component, OnInit, Input } from "@angular/core";
import { Type } from "@app/types";

@Component({
  selector: "app-item",
  template: `
    <img [src]="this.imgSrc + icon + '.png'" [ngClass]="{ big: big }" />

    <app-button
      *ngIf="shop"
      type="shop"
      [value]="'100'"
      [icon]="'gold'"
    ></app-button>
  `,
  styleUrls: ["item.component.scss"],
})
export class ItemComponent implements OnInit {
  @Input() icon: string;
  @Input() shop: boolean = false;
  @Input() big: boolean = false;
  @Input() type: Type = Type.inventory;
  public imgSrc: string = "assets/icons/common_icon_";

  ngOnInit() {
    if (this.type === Type.cashShop) this.imgSrc = "assets/icons/shop_img_";
  }
}
