import { Component, OnInit } from "@angular/core";
import { Type } from "@app/types";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { Player } from "@app/models";
import { PlayerState } from "@app/player.state";

@Component({
  template: `
    <app-dialog title="Info">
      <div class="content">
        <app-user-stats [playerStats]="playerStats$ | async"></app-user-stats>
        <app-inventory
          title="Inventory"
          [items]="items"
          [type]="TypeEnum.inventory"
        ></app-inventory>
      </div>
    </app-dialog>
  `,
  styleUrls: ["info.view.scss"],
})
export class InfoView implements OnInit {
  public items: string[];
  public TypeEnum: typeof Type = Type;

  @Select(PlayerState.playerStats) public playerStats$: Observable<
    Partial<Player>
  >;

  ngOnInit() {
    this.items = [
      "anvil",
      "arrow",
      "candle",
      "chicken",
      "lucky",
      "shield_A",
      "sword_B",
      "potion_red",
    ];
  }
}
