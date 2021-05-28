import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Clima } from 'src/app/interfaces/iClima';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-info-adicional',
  templateUrl: './info-adicional.component.html',
  styleUrls: ['./info-adicional.component.scss'],
})
export class InfoAdicionalComponent implements OnInit {
  latitud : number;
  longitud : number;
  ObjClima : Clima;
  img_clima: string = '';
  isLoading: boolean = true;

  constructor(
    private climaService : ClimaService,
    private menuCtrl : MenuController
  ) { }

  ngOnInit() {
    this.obtenerGeolocalizacion();
  }

  obtenerGeolocalizacion(){
    const options = {
      enableHighAccuracy: true,
      timeout: 50000,
      maximumAge: 0
    };

     window.navigator.geolocation.getCurrentPosition(
       (success)=>{
        console.log(success.coords.latitude, "longitud =>" ,success.coords.longitude)
        setTimeout(() => {
          this.obtenerClima(success);
        }, 800);

      }, (error)=>{
        this.isLoading = false;
        console.warn('ERROR(' + error.code + '): ' + error.message);
      }, options);
        

   
  }

obtenerClima(success){
  this.climaService.getClima(success.coords.latitude, success.coords.longitude).subscribe((response:any)=>{
    console.log(response);
    this.ObjClima = response;
    this.isLoading = false;
    this.img_clima = `http://openweathermap.org/img/w/${this.ObjClima.weather[0].icon}.png`
    console.log(this.ObjClima.weather[0]);
  })
}

toggleMenu(){
  this.menuCtrl.toggle();
}
}