import { Component, Input } from '@angular/core';
import { Player } from '@app/models';

@Component({
  selector: "app-header",
  template: `
    <app-user-gage [playerStats]="playerStats"></app-user-gage>

    <div class="status">
      <app-status-frame
        icon="heart"
        [value]="playerStats.hearts"
      ></app-status-frame>

      <app-status-frame
        icon="gold"
        [value]="playerStats.gold"
      ></app-status-frame>

      <app-status-frame icon="gem" [value]="playerStats.gem"></app-status-frame>
    </div>
  `,
  styleUrls: ["header.component.scss"],
})
export class HeaderComponent {
  @Input() playerStats: Partial<Player>;
}
