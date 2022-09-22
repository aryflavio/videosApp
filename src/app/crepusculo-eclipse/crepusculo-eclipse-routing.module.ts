import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrepusculoEclipsePage } from './crepusculo-eclipse.page';

const routes: Routes = [
  {
    path: '',
    component: CrepusculoEclipsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrepusculoEclipsePageRoutingModule {}
