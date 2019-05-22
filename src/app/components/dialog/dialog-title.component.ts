import { Component, Input } from '@angular/core';

@Component({
  selector: "app-dialog-title",
  template: `
    <h2>{{ value }}</h2>
  `,
  styleUrls: ["dialog-title.component.scss"],
})
export class DialogTitleComponent {
  @Input() value: string;
}
