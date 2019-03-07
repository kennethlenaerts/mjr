import { ShopView } from './views/shop/shop.view';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartView, InventoryView } from './views';

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryView,
    data: { animation: 'inventory' }
  },
  { path: 'shop', component: ShopView, data: { animation: 'shop' } },
  { path: '', component: StartView, data: { animation: 'start' } },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
