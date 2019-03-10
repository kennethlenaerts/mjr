import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-title',
  template: `
    <h2>{{ value }}</h2>
  `,
  styleUrls: ['dialog-title.component.scss']
})
export class DialogTitleComponent implements OnInit {
  @Input() public value: string;
  constructor() {}

  ngOnInit() {}
}
