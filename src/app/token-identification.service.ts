import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenIdentificationService {

  //any veut dire n'imp
  public utilisateur: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }
  public raffraichir() {
    if (localStorage.getItem("token") != null) {
      const token: any = localStorage.getItem("token");
      try {
        // console.log(JSON.parse(atob(token.split(".")[1])))
        // return JSON.parse(atob(token.split(".")[1]))
        // token.split renvoi les elem d'un tableau
        this.utilisateur.next(JSON.parse(atob(token.split(".")[1])));
      } catch {
        this.utilisateur.next(null);
      }
    } else {
      this.utilisateur.next(null);
    }
  }
 deconnexion() {
    //throw new Error('Method not implemented.');
     this.utilisateur.next(null);
  }
}
