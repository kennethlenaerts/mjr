import { ShopView } from './views/shop/shop.view';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartView, InfoView, CashShopView } from './views';

const routes: Routes = [
  {
    path: 'info',
    component: InfoView,
    data: { animation: 'info' }
  },
  { path: 'shop', component: ShopView, data: { animation: 'shop' } },
  {
    path: 'cash-shop',
    component: CashShopView,
    data: { animation: 'cash-shop' }
  },
  { path: '', component: StartView, data: { animation: 'start' } },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
