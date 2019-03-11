import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  template: `
    <div class="info-frame">
      <div class="content">
        <div class="user-info">
          <h1>{{ userName }}</h1>
          <h1>Level {{ level }}</h1>
        </div>
        <!-- use rare candy? -->

        <div class="value" *ngFor="let item of (userStats | keyvalue)">
          <h2>{{ item.key }}</h2>
          <h2>{{ item.value }}</h2>
        </div>
      </div>
    </div>
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
    gems: number;
  };

  ngOnInit() {
    this.userName = 'User Name';
    this.level = '68';
    this.userStats = {
      attack: 1234,
      defense: 1234,
      health: 1234,
      gold: 1234,
      gems: 1234
    };
  }
}
