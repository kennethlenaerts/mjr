import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameGuard, ItemsLoadedGuard, PlayerGuard } from '@app/game.guard';
import { CashShopView, InfoView, ShopView, StartView } from '@app/views';

const routes: Routes = [
  {
    path: "info",
    component: InfoView,
    data: { animation: "info" },
    canActivate: [ItemsLoadedGuard],
  },
  {
    path: "shop",
    component: ShopView,
    data: { animation: "shop" },
    canActivate: [ItemsLoadedGuard],
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
