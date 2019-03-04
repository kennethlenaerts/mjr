import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <app-button type="menu" icon="treasure"></app-button>
    <app-button type="menu" icon="shop" badge="new"></app-button>
    <app-button
      type="menu"
      icon="envelope"
      badge="count"
      count="5"
    ></app-button>
    <app-button type="menu" icon="mission" badge="alert"></app-button>
    <app-button type="menu" icon="trophy"></app-button>
    <app-button type="menu" icon="setting"></app-button>
  `,
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {
  ngOnInit() {}
}
