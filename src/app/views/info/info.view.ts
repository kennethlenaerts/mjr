import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-dialog title="Shop"></app-dialog>
    <app-dialog title="inventory"></app-dialog>
  `,
  styleUrls: ['info.view.scss']
})
export class InfoView implements OnInit {
  ngOnInit() {}
}
