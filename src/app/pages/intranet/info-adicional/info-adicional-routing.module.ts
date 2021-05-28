import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoAdicionalComponent } from 'src/app/components/info-adicional/info-adicional.component';

import { InfoAdicionalPage } from './info-adicional.page';

const routes: Routes = [
  {
    path: '',
    component: InfoAdicionalPage,
    children: [
      {
        path: '',
        component: InfoAdicionalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoAdicionalPageRoutingModule {}
