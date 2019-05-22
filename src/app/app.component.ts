import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Player } from '@app/models';
import { PlayerState } from '@app/player.state';
import { slider } from '@app/route-animations';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

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
export class AppComponent {
  @Select(PlayerState.stats)
  public playerStats$: Observable<Partial<Player>>;

  public prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
