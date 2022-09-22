import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ORegressoPageRoutingModule } from './o-regresso-routing.module';

import { ORegressoPage } from './o-regresso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ORegressoPageRoutingModule
  ],
  declarations: [ORegressoPage]
})
export class ORegressoPageModule {}
