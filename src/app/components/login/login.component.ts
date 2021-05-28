import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credential: any;

  
  public loginForm = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.email]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12)
    ])
  })

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController,
  ) { }

  ngOnInit() {}

  
  async signing(event : Event) {
    event.preventDefault();
    const {
      userName,
      userPassword
    } = this.loginForm.value;
 

    await  this.authService.signing(userName, userPassword).then((res)=>{
     this.authService.setDataSigning(res);
    }).catch((err)=>{
      this.authService.credentials.next(null);
      localStorage.removeItem('credentials');
    })
   
    this.authService.credentials.subscribe(credentials=>{
     this.credential = credentials ? credentials : localStorage.getItem('credentials');
    })

    if(this.credential){
       this.router.navigate(['/intranet/dashboard']);
    }else{
      this.alert(); 
    }
  }

  async alert() {
    const alert = await this.alertController.create({
        cssClass: 'alert-fail-login',
        header: 'Error al iniciar sesión',
        message: 'Las credenciales son incorrectas',
        buttons: [
            {
                text: 'Aceptar',
                role: 'cancel'
            },
            // {
            //     text: 'CERRAR SESIÓN',
            //     handler: () => {
                 
            //     }
            // }
        ],
        backdropDismiss: false
    })

    await alert.present()
}
}
