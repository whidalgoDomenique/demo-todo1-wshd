import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-transaccion-qr',
  templateUrl: './transaccion-qr.component.html',
  styleUrls: ['./transaccion-qr.component.scss'],
})
export class TransaccionQrComponent implements OnInit {

  constructor(  private menuCtrl : MenuController) { }

  ngOnInit() {}
  
  toggleMenu(){
    this.menuCtrl.toggle();
  }
}
