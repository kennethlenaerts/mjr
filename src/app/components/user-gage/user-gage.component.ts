import { Component, ElementRef, Input, OnChanges, Renderer2, ViewChild } from '@angular/core';
import { Player } from '@app/models';

@Component({
  selector: "app-user-gage",
  template: `
    <div class="bar-hp-container">
      <div #barHp class="bar-hp"></div>
      <p class="value">
        {{ playerStats.health }} / {{ playerStats.maxHealth }}
      </p>
    </div>

    <h2 class="level badge">{{ playerStats.level }}</h2>
  `,
  styleUrls: ["user-gage.component.scss"],
})
export class UserGageComponent implements OnChanges {
  _oldHealth: number = 0;
  @Input() playerStats: Partial<Player>;
  @ViewChild("barHp") _barHp: ElementRef<HTMLDivElement>;

  constructor(private _renderer: Renderer2) {}

  ngOnChanges() {
    if (this.playerStats.health !== this._oldHealth) {
      const currentWidth = this.playerStats.health / 4;

      this._renderer.setStyle(
        this._barHp.nativeElement,
        "width",
        `${currentWidth}px`,
      );

      this._oldHealth = this.playerStats.health;
    }
  }
}
