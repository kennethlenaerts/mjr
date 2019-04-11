import { Component, Input, OnInit } from "@angular/core";
import { Type } from "@app/types";

@Component({
  selector: "app-button",
  template: `
    <button *ngIf="type === TypeEnum.status" class="add"></button>

    <button
      *ngIf="type === TypeEnum.inventory"
      [class]="'inventory' + ' ' + icon"
    ></button>

    <a *ngIf="type === TypeEnum.shop" class="shop">
      <img [src]="'assets/icons/common_icon_' + icon + '.png'" />
      <h3>{{ value }}</h3>
    </a>
  `,
  styleUrls: ["button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() type: Type;
  @Input() icon: string;
  @Input() badge: string;
  @Input() value: string;
  @Input() active: boolean;
  public TypeEnum: typeof Type = Type;

  ngOnInit() {
    console.log(this.type);
  }
}
