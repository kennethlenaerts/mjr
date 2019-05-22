import { Component, Input } from '@angular/core';

@Component({
  selector: "app-dialog",
  template: `
    <app-dialog-title [value]="title"></app-dialog-title>
    <app-dialog-frame></app-dialog-frame>

    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ["dialog.component.scss"],
})
export class DialogComponent {
  @Input() title: string | number;
}
