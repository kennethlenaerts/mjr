import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Player } from '@app/models';

@Component({
  selector: "app-user-stats",
  template: `
    <div class="info-frame">
      <div class="content">
        <div class="user-info">
          <h2>{{ playerStats.userName }}</h2>
          <h2>Level {{ playerStats.level }}</h2>
        </div>

        <div class="value" *ngFor="let stat of userStats">
          <img [src]="'assets/stat_info_icons/stat_info_ic_' + stat + '.png'" />
          <h3>{{ stat.toUpperCase() }}</h3>
          <h3>{{ playerStats[stat] }}</h3>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["user-stats.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatsComponent {
  userStats: string[] = ["attack", "defense", "health", "gold", "gem"];
  @Input() playerStats: Partial<Player>;
}
