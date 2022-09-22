import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ORegressoPage } from './o-regresso.page';

const routes: Routes = [
  {
    path: '',
    component: ORegressoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ORegressoPageRoutingModule {}
