import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransaccionQrPageRoutingModule } from './transaccion-qr-routing.module';

import { TransaccionQrPage } from './transaccion-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaccionQrPageRoutingModule
  ],
  declarations: [TransaccionQrPage]
})
export class TransaccionQrPageModule {}
