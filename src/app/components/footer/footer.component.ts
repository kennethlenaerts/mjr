import { Router, Event, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface Button {
  badge?: string;
  icon?: string;
  routerLink?: string;
  value?: string | number;
}

const buttons: Button[] = [
  {
    routerLink: '/',
    icon: 'mission'
  },
  {
    routerLink: '/info',
    icon: 'treasure'
  },
  {
    routerLink: '/shop',
    icon: 'shop',
    badge: 'new'
  },
  {
    routerLink: '/messages',
    icon: 'envelope',
    badge: 'count',
    value: '5'
  },
  {
    routerLink: '/achievements',
    icon: 'trophy',
    badge: 'alert'
  },
  {
    routerLink: '/settings',
    icon: 'setting'
  }
];

@Component({
  selector: 'app-footer',
  template: `
    <app-button
      *ngFor="let button of buttons"
      [active]="url === button.routerLink"
      [routerLink]="button.routerLink"
      [icon]="button.icon"
      [badge]="button.badge"
      [value]="button.value"
      type="menu"
    ></app-button>
  `,
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {
  public url: string;
  public buttons: Button[];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
    this.url = window.location.pathname;

    this.buttons = buttons;
  }
}
