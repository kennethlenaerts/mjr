import { Component, OnInit, Input } from "@angular/core";
import { Player } from "@app/models";

@Component({
  selector: "app-user-stats",
  template: `
    <div class="info-frame">
      <div class="content">
        <div class="user-info">
          <h2>{{ playerStats.userName }}</h2>
          <h2>Level {{ playerStats.level }}</h2>
        </div>

        <div class="value" *ngFor="let item of userStats | keyvalue">
          <img
            [src]="'assets/stat_info_icons/stat_info_ic_' + item.key + '.png'"
          />
          <h3>{{ item.key }}</h3>
          <h3>{{ item.value }}</h3>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["user-stats.component.scss"],
})
export class UserStatsComponent implements OnInit {
  @Input() public playerStats: Partial<Player>;
  public userStats: {
    attack: number;
    defense: number;
    health: number;
    gold: number;
    gem: number;
  };

  ngOnInit() {
    this.userStats = {
      attack: this.playerStats.attack,
      defense: this.playerStats.defense,
      health: this.playerStats.health,
      gold: this.playerStats.gold,
      gem: this.playerStats.diamonds,
    };
  }
}
