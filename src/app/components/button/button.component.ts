import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button class="menu">
      <img [src]="'assets/icons/common_icon_' + icon + '.png'" />
    </button>
  `,
  styleUrls: ['button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
