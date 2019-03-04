import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-frame',
  template: `
    <img [src]="'assets/icons/common_icon_' + icon + '.png'" />
    <app-button type="add"></app-button>
    <h2>{{ value }}</h2>
  `,
  styleUrls: ['status-frame.component.scss']
})
export class StatusFrameComponent implements OnInit {
  @Input() value: string | number;
  @Input() icon: string;

  ngOnInit() {}
}
