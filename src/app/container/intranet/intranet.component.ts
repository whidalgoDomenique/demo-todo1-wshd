import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-intranet',
  templateUrl: './intranet.component.html',
  styleUrls: ['./intranet.component.scss'],
})
export class IntranetComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() { }
  navigateTo(idNavigate: string) {
    switch (idNavigate) {
      case 'Cuentas':
        this.router.navigate(['/intranet/dashboard']);
        break;

      case 'IAdicional':
        this.router.navigate(['/intranet/info-adicional']);
        break;

      case 'TQR':
        this.router.navigate(['/intranet/transaccion-qr']);
        break;

      case 'logout':
        this.authService.deleteSesion();
        this.router.navigate(['/login']);
        break;

    }
    this.menuCtrl.toggle();
  }
}
