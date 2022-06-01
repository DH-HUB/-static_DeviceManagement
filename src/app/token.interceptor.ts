import { Injectable } from '@angular/core';// cette page intercepte et rajoute le token
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { TokenIdentificationService } from './token-identification.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  //tokenIdentification: any;

  constructor(
    private tokenIdentification: TokenIdentificationService,
  private router : Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

     let enTete;

    if (localStorage.getItem('token') != null) {
      const timestamp = this.tokenIdentification.utilisateur.value.exp;
      const dateExpiration = new Date(timestamp * 1000);
      console.log(dateExpiration)
      console.log(new Date)
      if (dateExpiration < new Date) {
        this.tokenIdentification.deconnexion()
        this.router.navigateByUrl("connexion")
        console.log("Expiré")
        return EMPTY;
      }
      enTete = new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      })

    } else {
      enTete = new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })

    }

    const requeteClone = request.clone({
      headers: enTete
    });

    return next.handle(requeteClone);
  }
}
