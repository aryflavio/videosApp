import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OTelefonePretoPageRoutingModule } from './o-telefone-preto-routing.module';

import { OTelefonePretoPage } from './o-telefone-preto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OTelefonePretoPageRoutingModule
  ],
  declarations: [OTelefonePretoPage]
})
export class OTelefonePretoPageModule {}
