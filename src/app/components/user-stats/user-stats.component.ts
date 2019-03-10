import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  template: `
    <div class="bar-hp-container">
      <div class="bar-hp"></div>
      <p class="value">420/1000</p>
    </div>

    <h2 class="level badge">69</h2>
  `,
  styleUrls: ['user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
