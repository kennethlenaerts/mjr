import { ShopView } from "./views/shop/shop.view";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StartView, InfoView, CashShopView } from "./views";
import { GameGuard, ItemsLoadedGuard, PlayerGuard } from "./game.guard";

const routes: Routes = [
  {
    path: "info",
    component: InfoView,
    data: { animation: "info" },
    // canActivate: [ItemsLoadedGuard],
    canActivate: [GameGuard, PlayerGuard],
  },
  {
    path: "shop",
    component: ShopView,
    data: { animation: "shop" },
    // canActivate: [ItemsLoadedGuard],
    canActivate: [GameGuard, PlayerGuard],
  },
  {
    path: "cash-shop",
    component: CashShopView,
    data: { animation: "cash-shop" },
    canActivate: [ItemsLoadedGuard],
  },
  {
    path: "",
    component: StartView,
    data: { animation: "start" },
    canActivate: [GameGuard, PlayerGuard],
  },
  { path: "**", redirectTo: "/" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
