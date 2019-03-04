import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartView } from './views';

const routes: Routes = [
  { path: '', component: StartView },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
