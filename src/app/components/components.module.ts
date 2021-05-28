import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoAdicionalComponent } from './info-adicional/info-adicional.component';
import { TransaccionQrComponent } from './transaccion-qr/transaccion-qr.component';

@NgModule({
    declarations: [
        MenuComponent,
        LoginComponent,
        DashboardComponent,
        InfoAdicionalComponent,
        TransaccionQrComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        IonicModule
    ],
    exports: [
        MenuComponent,
        LoginComponent,
        DashboardComponent,
        InfoAdicionalComponent,
        TransaccionQrComponent
    ]
})
export class ComponentsModule {
}
