import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
} from "@angular/core";
import { Type } from "@app/types";
import { Item } from "@app/models";

@Component({
  selector: "app-item",
  template: `
    <img
      [src]="item.src"
      [ngClass]="{ big: big }"
      (click)="itemClick.emit(item)"
    />

    <!--
    <h2 *ngIf="type === TypeEnum.cashShop">1000</h2>

    <app-button
      *ngIf="isShopView"
      [type]="type"
      [value]="'100'"
      [icon]="icon"
    ></app-button>
    -->
  `,
  styleUrls: ["item.component.scss"],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() big: boolean = false;
  @Input() type: Type = Type.inventory;
  @Input() icon: string;
  @Output() itemClick: EventEmitter<Item> = new EventEmitter();

  public isShopView: boolean = false;
  public TypeEnum: typeof Type = Type;

  @HostBinding("class.big") public get isBig(): boolean {
    return this.big;
  }

  ngOnInit() {
    if (this.type === Type.cashShop || this.type === Type.shop)
      this.isShopView = true;
  }
}
