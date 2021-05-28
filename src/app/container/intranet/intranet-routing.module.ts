import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './intranet.component';

const routes: Routes = [
  {
    path: '',
    component: IntranetComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../pages/intranet/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'info-adicional',
        loadChildren: () => import('../../pages/intranet/info-adicional/info-adicional.module').then( m => m.InfoAdicionalPageModule)
      },
      {
        path: 'transaccion-qr',
        loadChildren: () => import('../../pages/intranet/transaccion-qr/transaccion-qr.module').then( m => m.TransaccionQrPageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
