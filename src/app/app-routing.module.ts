import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartView, InventoryView } from './views';

const routes: Routes = [
  {
    path: 'inventory',
    component: InventoryView,
    data: { animation: 'inventory' }
  },
  { path: '', component: StartView, data: { animation: 'start' } },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
