import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Type } from "@app/types";

@Component({
  selector: "app-button",
  template: `
    <button *ngIf="type === TypeEnum.status" class="add"></button>

    <button
      *ngIf="type === TypeEnum.inventory"
      [class]="'inventory' + ' ' + icon"
    ></button>

    <a
      *ngIf="this.type === TypeEnum.shop"
      (click)="buttonClick.emit()"
      class="shop"
    >
      <img [src]="'assets/icons/common_icon_gold.png'" />
      <h3>{{ value }}</h3>
    </a>

    <ng-container *ngIf="this.type === TypeEnum.cashShop">
      <a *ngIf="cashShopIsGem" class="shop cash gem">
        <img [src]="'assets/icons/common_icon_gem.png'" />
        <h3>{{ value }}</h3>
      </a>

      <a *ngIf="!cashShopIsGem" class="shop cash price">
        <img [src]="'assets/icons/common_icon_price.png'" />
        <h3>{{ value }}</h3>
      </a>
    </ng-container>
  `,
  styleUrls: ["button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() type: Type;
  @Input() icon: string;
  @Input() badge: string;
  @Input() value: string;
  @Input() active: boolean;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter();
  public TypeEnum: typeof Type = Type;
  public isShopView: boolean = false;
  public bigIcon: boolean = false;
  public cashShopIsGem: boolean = true;

  ngOnInit() {
    if (this.icon === "price") this.cashShopIsGem = false;
  }
}
