import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameGuard, PlayerGuard } from '@app/game.guard';
import { CashShopView, InfoView, ShopView, StartView } from '@app/views';

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
    // canActivate: [ItemsLoadedGuard],
    canActivate: [GameGuard, PlayerGuard],
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
