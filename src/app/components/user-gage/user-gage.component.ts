import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-gage',
  template: `
    <div class="bar-hp-container">
      <div class="bar-hp"></div>
      <p class="value">420/1000</p>
    </div>

    <h2 class="level badge">69</h2>
  `,
  styleUrls: ['user-gage.component.scss']
})
export class UserGageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
