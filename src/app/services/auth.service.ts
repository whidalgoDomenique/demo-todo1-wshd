import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentials: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(
    private fireAuth : AngularFireAuth,
    private fireStore : AngularFirestore  
  ) { 

  }

   signing(userName : string, password : string){
    return this.fireAuth.signInWithEmailAndPassword(userName,password);
  }
  
  setDataSigning(credentials : any){
    this.credentials.next(credentials.user.uid);
    localStorage.setItem('credentials', credentials.user.uid);
  }

  deleteSesion(){
    this.credentials.next(null)
    localStorage.removeItem('credentials');
  }

  getBalances(userId){
   return this.fireStore.collection('cuentas', ref => ref.where('userId','==',userId)).valueChanges().pipe(take(1));
  }

  updateBalances(idUsuario : string, tipoCuenta : string, value : string ){
  //  console.log(this.fireStore.collection('cuentas').doc('yvR8DyKO8ManUZ4Uv9wYRScmyAg2-corriente').set({'saldo' : '2000'}, {merge : true}));
    console.log(this.fireStore.collection('cuentas').doc(`${idUsuario}-${tipoCuenta}`).set({'saldo' : value}, {merge : true}));
  }


}
