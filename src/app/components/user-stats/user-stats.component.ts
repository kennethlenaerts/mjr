import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  template: `
    <div class="info-frame">
      <div class="content">
        <div class="user-info">
          <h2>{{ userName }}</h2>
          <h2>Level {{ level }}</h2>
        </div>

        <div class="value" *ngFor="let item of (userStats | keyvalue)">
          <img
            [src]="'assets/stat_info_icons/stat_info_ic_' + item.key + '.png'"
          />
          <h3>{{ item.key }}</h3>
          <h3>{{ item.value }}</h3>
        </div>
      </div>
    </div>
    <!--

    <div class="user-info">
      <h1>{{ userName }}</h1>
      <h1>Level {{ level }}</h1>
    </div>

    <div class="value" *ngFor="let item of (userStats | keyvalue)">
      <img [src]="'assets/stat_info_icons/stat_info_ic_' + item.key + '.png'" />
      <h2>{{ item.key }}</h2>
      <h2>{{ item.value }}</h2>
    </div>
    -->
  `,
  styleUrls: ['user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {
  @Input() userName: string;
  @Input() level: string;
  @Input() userStats: {
    attack: number;
    defense: number;
    health: number;
    gold: number;
    gem: number;
  };

  ngOnInit() {
    this.userName = 'User Name';
    this.level = '68';
    this.userStats = {
      attack: 1234,
      defense: 1234,
      health: 1234,
      gold: 1234,
      gem: 1234
    };
  }
}
