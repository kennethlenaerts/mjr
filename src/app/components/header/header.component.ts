import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <app-user-stats></app-user-stats>
    <div class="status">
      <app-status-frame icon="heart" value="50"></app-status-frame>
      <app-status-frame icon="gold" value="150"></app-status-frame>
      <app-status-frame icon="gem" value="0"></app-status-frame>
    </div>
  `,
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit() {}
}
