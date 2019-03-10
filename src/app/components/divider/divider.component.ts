import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  template: `
    <div class="diamond"></div>
    <div class="line"></div>
  `,
  styleUrls: ['divider.component.scss']
})
export class DividerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
