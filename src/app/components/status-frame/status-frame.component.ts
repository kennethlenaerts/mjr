import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-frame',
  template: `
    <img [src]="'assets/icons/common_icon_' + icon + '.png'" />
    <button class="add"></button>
    <h2>50</h2>
  `,
  styleUrls: ['status-frame.component.scss']
})
export class StatusFrameComponent implements OnInit {
  @Input() icon: string;
  constructor() {}

  ngOnInit() {}
}
