import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VelozesEFuriososPageRoutingModule } from './velozes-e-furiosos-routing.module';

import { VelozesEFuriososPage } from './velozes-e-furiosos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VelozesEFuriososPageRoutingModule
  ],
  declarations: [VelozesEFuriososPage]
})
export class VelozesEFuriososPageModule {}
