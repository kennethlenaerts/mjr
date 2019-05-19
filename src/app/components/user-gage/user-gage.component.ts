import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  Renderer2,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { Player } from "@app/models";

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
  private oldHealth: number = 0;
  @Input()
  public playerStats: Partial<Player>;

  @ViewChild("barHp")
  private barHp: ElementRef<HTMLDivElement>;

  constructor(private renderer: Renderer2) {}

  ngOnChanges() {
    if (this.playerStats.health !== this.oldHealth) {
      const currentWidth = this.playerStats.health / 4;

      this.renderer.setStyle(
        this.barHp.nativeElement,
        "width",
        `${currentWidth}px`,
      );

      this.oldHealth = this.playerStats.health;
    }
  }
}
