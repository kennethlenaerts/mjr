import { Component, Input } from '@angular/core';
import { Type } from '@app/models';

@Component({
  selector: "app-status-frame",
  template: `
    <img [src]="'assets/icons/common_icon_' + icon + '.png'" />
    <app-button [type]="TypeEnum.status"></app-button>
    <h2>{{ value }}</h2>
  `,
  styleUrls: ["status-frame.component.scss"],
})
export class StatusFrameComponent {
  TypeEnum: typeof Type = Type;
  @Input() value: string | number;
  @Input() icon: string;
}
