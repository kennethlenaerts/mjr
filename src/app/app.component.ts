import { HttpService } from './http.service';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Player } from '@app/models';
import { PlayerState } from '@app/player.state';
import { slider } from '@app/route-animations';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: "app-root",
  template: `
    <!--
    <app-header [playerStats]="playerStats$ | async"></app-header>
    -->

    <main [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>

    <!--
    <app-footer></app-footer>

    <button *ngIf="devTools" (click)="resetDb()" class="reset">Reset DB</button>
    -->
  `,
  styleUrls: ["app.component.scss"],
  animations: [slider],
})
export class AppComponent {
  devTools: boolean = false;

  @Select(PlayerState.stats) playerStats$: Observable<Partial<Player>>;

  @HostListener("document:keydown.w") showDevTools() {
    this.devTools = !this.devTools;
  }

  constructor(private _httpService: HttpService) {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  resetDb() {
    this._httpService
      .resetDb()
      .pipe(take(1))
      .subscribe();
  }
}
