import { Component, OnInit } from '@angular/core';

interface Button {
  routerLink?: string;
  icon?: string;
  badge?: string;
  value?: string | number;
}

const buttons = [
  {
    routerLink: '/',
    icon: 'mission'
  },
  {
    routerLink: '/inventory',
    icon: 'treasure'
  },
  {
    routerLink: '/',
    icon: 'shop',
    badge: 'new'
  },
  {
    routerLink: '/',
    icon: 'envelope',
    badge: 'count',
    value: '5'
  },
  {
    routerLink: '/',
    icon: 'trophy',
    badge: 'alert'
  },
  {
    routerLink: '/',
    icon: 'setting'
  }
];

@Component({
  selector: 'app-footer',
  template: `
    <app-button
      *ngFor="let button of buttons"
      [routerLink]="button.routerLink"
      [icon]="button.icon"
      [badge]="button.badge && button.badge"
      [value]="button.value && button.value"
      type="menu"
    ></app-button>
  `,
  styleUrls: ['footer.component.scss']
})
export class FooterComponent implements OnInit {
  public url: string;
  public buttons: Button[];

  ngOnInit() {
    this.url = window.location.pathname
      .split('')
      .slice(1)
      .join('');

    this.buttons = buttons;
  }
}
