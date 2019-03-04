import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <img src="assets/logo.png" />
    <button class="start"></button>
  `,
  styleUrls: ['start.view.scss']
})
export class StartView implements OnInit {
  ngOnInit() {}
}
