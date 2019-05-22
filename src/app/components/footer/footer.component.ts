import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

interface Button {
  badge?: string;
  icon?: string;
  routerLink?: string;
  value?: string | number;
}

const buttons: Button[] = [
  {
    routerLink: "/",
    icon: "mission",
  },
  {
    routerLink: "/info",
    icon: "treasure",
  },
  {
    routerLink: "/shop",
    icon: "shop",
    badge: "new",
  },
  {
    routerLink: "/cash-shop",
    icon: "gem_chest",
    badge: "count",
    value: "5",
  },
  {
    routerLink: "/achievements",
    icon: "trophy",
    badge: "alert",
  },
  {
    routerLink: "/settings",
    icon: "setting",
  },
];

@Component({
  selector: "app-footer",
  template: `
    <app-menu-button
      *ngFor="let button of buttons"
      [active]="url === button.routerLink"
      [routerLink]="button.routerLink"
      [icon]="button.icon"
      [badge]="button.badge"
      [value]="button.value"
      type="menu"
    ></app-menu-button>
  `,
  styleUrls: ["footer.component.scss"],
})
export class FooterComponent implements OnInit {
  url: string = window.location.pathname;
  buttons: Button[] = buttons;

  constructor(private _router: Router) {}

  ngOnInit() {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }
}
