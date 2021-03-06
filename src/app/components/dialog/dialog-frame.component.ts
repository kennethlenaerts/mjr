import { Component } from '@angular/core';

@Component({
  selector: "app-dialog-frame",
  template: `
    <div class="dialog">
      <div class="corner top-left"></div>
      <div class="corner top-right"></div>
      <div class="corner bottom-left"></div>
      <div class="corner bottom-right"></div>

      <div class="border vertical top"></div>
      <div class="border vertical bottom"></div>
      <div class="border horizontal left"></div>
      <div class="border horizontal right"></div>
    </div>
  `,
  styleUrls: ["dialog-frame.component.scss"],
})
export class DialogFrameComponent {}
