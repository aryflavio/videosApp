import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JujutsuKaisenPage } from './jujutsu-kaisen.page';

const routes: Routes = [
  {
    path: '',
    component: JujutsuKaisenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JujutsuKaisenPageRoutingModule {}
