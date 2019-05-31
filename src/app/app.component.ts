import { HttpService } from './http.service';
import { State } from './state';
import { selectPlayerStats } from './state/player';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Player } from '@app/models';
import { slider } from '@app/route-animations';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: "app-root",
  template: `
    <app-header [playerStats]="playerStats$ | async"></app-header>

    <main [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>

    <app-footer></app-footer>

    <button *ngIf="devTools" (click)="resetDb()" class="reset">Reset DB</button>
  `,
  styleUrls: ["app.component.scss"],
  animations: [slider],
})
export class AppComponent {
  devTools: boolean = false;

  playerStats$: Observable<Partial<Player>>;

  @HostListener("document:keydown.w") showDevTools() {
    this.devTools = !this.devTools;
  }

  constructor(private _httpService: HttpService, private store: Store<State>) {
    this.playerStats$ = store.pipe(select(selectPlayerStats));
  }

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
