import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
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
  ngOnInit() {}
}
