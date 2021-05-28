import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAdicionalPageRoutingModule } from './info-adicional-routing.module';

import { InfoAdicionalPage } from './info-adicional.page';
import { BrowserModule } from '@angular/platform-browser'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAdicionalPageRoutingModule,

  ],
  declarations: [InfoAdicionalPage]
})
export class InfoAdicionalPageModule {}
