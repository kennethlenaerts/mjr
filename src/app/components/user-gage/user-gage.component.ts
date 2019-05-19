import { Component, Input } from "@angular/core";
import { Player } from "@app/models";

@Component({
  selector: "app-user-gage",
  template: `
    <div class="bar-hp-container">
      <div class="bar-hp"></div>
      <p class="value">
        {{ playerStats.health }} / {{ playerStats.maxHealth }}
      </p>
    </div>

    <h2 class="level badge">{{ playerStats.level }}</h2>
  `,
  styleUrls: ["user-gage.component.scss"],
})
export class UserGageComponent {
  @Input()
  public playerStats: Partial<Player>;
}
