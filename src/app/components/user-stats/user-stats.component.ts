import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-stats',
  template: `
    <div class="bar-hp-container">
      <div class="bar-hp"></div>
      <p class="value">420/1000</p>
    </div>

    <h3 class="level">69</h3>
  `,
  styleUrls: ['user-stats.component.scss']
})
export class UserStatsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
