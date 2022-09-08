import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OTelefonePretoPage } from './o-telefone-preto.page';

const routes: Routes = [
  {
    path: '',
    component: OTelefonePretoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OTelefonePretoPageRoutingModule {}
