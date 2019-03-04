import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <app-button [routerLink]="['/']" type="menu" icon="mission"></app-button>
    <app-button
      [routerLink]="['/inventory']"
      type="menu"
      icon="treasure"
    ></app-button>
    <app-button type="menu" icon="shop" badge="new"></app-button>
    <app-button
      type="menu"
      icon="envelope"
      badge="count"
      count="5"
    ></app-button>
    <app-button type="menu" icon="trophy" badge="alert"></app-button>
    <app-button type="menu" icon="setting"></app-button>
  `,
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {
  ngOnInit() {}
}
