import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  credentials: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(
    private fireStore : AngularFirestore  
  ) { 

  }

  
  getBalances(userId){
   return this.fireStore.collection('cuentas', ref => ref.where('userId','==',userId)).valueChanges().pipe(take(1));
  }

  updateBalances(idUsuario : string, tipoCuenta : string, value : string ){
  //  console.log(this.fireStore.collection('cuentas').doc('yvR8DyKO8ManUZ4Uv9wYRScmyAg2-corriente').set({'saldo' : '2000'}, {merge : true}));
    console.log(this.fireStore.collection('cuentas').doc(`${idUsuario}-${tipoCuenta}`).set({'saldo' : value}, {merge : true}));
  }


}
