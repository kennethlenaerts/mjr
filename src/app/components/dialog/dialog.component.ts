import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <app-dialog-title [value]="title"></app-dialog-title>
    <app-dialog-frame></app-dialog-frame>

    <div class="container">
      <div class="content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() public title: string | number;
  ngOnInit() {}
}
