import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VelozesEFuriososPage } from './velozes-e-furiosos.page';

const routes: Routes = [
  {
    path: '',
    component: VelozesEFuriososPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VelozesEFuriososPageRoutingModule {}
