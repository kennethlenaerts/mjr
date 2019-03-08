import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <img [src]="'assets/icons/common_icon_' + icon + '.png'" />
  `,
  styleUrls: ['item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() icon: string;
  ngOnInit() {}
}
