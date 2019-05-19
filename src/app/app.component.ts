import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { slider } from "./route-animations";
import { Select } from "@ngxs/store";
import { PlayerState } from "./player.state";
import { Player } from "./models";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <app-header [playerStats]="playerStats$ | async"></app-header>

    <main [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>

    <app-footer></app-footer>
  `,
  styleUrls: ["app.component.scss"],
  animations: [slider],
})
export class AppComponent implements OnInit {
  @Select(PlayerState.playerStats) public playerStats$: Observable<
    Partial<Player>
  >;

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  ngOnInit(): void {}
}
