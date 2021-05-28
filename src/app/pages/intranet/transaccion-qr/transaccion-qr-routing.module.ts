import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransaccionQrComponent } from 'src/app/components/transaccion-qr/transaccion-qr.component';

import { TransaccionQrPage } from './transaccion-qr.page';

const routes: Routes = [
  {
    path: '',
    component: TransaccionQrPage,
    children: [
      {
        path: '',
        component: TransaccionQrComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaccionQrPageRoutingModule {}
