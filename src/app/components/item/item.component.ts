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
      [ngClass]="{ big: type === TypeEnum.cashShop, isShop: isShop }"
      (click)="itemClick.emit(item)"
    />

    <!--
    <h2 *ngIf="type === TypeEnum.cashShop">1000</h2>
    -->

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
  public isShop: boolean = false;
  public TypeEnum: typeof Type = Type;

  @Input() item: Item;
  @Input() type: Type = Type.inventory;
  @Input() icon: string;
  @Output() itemClick: EventEmitter<Item> = new EventEmitter();
  @Output() buttonClick: EventEmitter<Item> = new EventEmitter();

  @HostBinding("class.big") big: boolean;

  ngOnInit() {
    this.big = this.type === this.TypeEnum.cashShop;

    if (this.type === Type.cashShop || this.type === Type.shop)
      this.isShop = true;
  }
}
