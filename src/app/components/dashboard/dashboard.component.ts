import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Cuentas } from 'src/app/interfaces/iUser';

import { AuthService } from 'src/app/services/auth.service';
import { CuentaService } from 'src/app/services/cuentas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  credential : string;
  cuentas : Cuentas[];
  isLoading: boolean = true;

  constructor(
    private cuentasService : CuentaService,
    private authService : AuthService,
    private menuCtrl : MenuController) { }

   ngOnInit() {

   this.authService.credentials.subscribe(credentials=>{
      this.credential = credentials ? credentials : localStorage.getItem('credentials');
     })

     this.cuentasService.getBalances(this.credential).subscribe((response : any)=>{

          this.cuentas = response;
          console.log( this.cuentas)
          this.isLoading = false;
     })
  }

  

  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
